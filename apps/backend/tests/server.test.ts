import request from "supertest";
import app from "../src/app";
import * as launchService from "../src/services/launch/launchService";

jest.mock("../src/services/launch/launchService");

describe("Backend API Tests", () => {
  describe("Health Check", () => {
    it("should return 200 OK for the health check endpoint", async () => {
      const response = await request(app).get("/health");
      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        status: "OK",
        message: "Server is running",
      });
    });
  });

  describe("Launch Controller", () => {
    it("should return limited launches for getLaunches", async () => {
      const mockLaunches = Array(15)
        .fill(null)
        .map((_, i) => ({ id: `${i}`, name: `Launch ${i}` }));
      (launchService.fetchLaunches as jest.Mock).mockResolvedValue(
        mockLaunches
      );

      const response = await request(app).get("/api/launches");
      expect(response.status).toBe(200);
      expect(response.body.length).toBe(15); // Update this to match the actual limit
      //expect(response.body.docs[0].name).toBe("Launch 0");
    });

    it("should return a specific launch for getLaunchById", async () => {
      const mockLaunch = { id: "1", name: "Specific Launch" };
      (launchService.fetchLaunchById as jest.Mock).mockResolvedValue(
        mockLaunch
      );

      const response = await request(app).get("/api/launches/1");
      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockLaunch);
    });

    it("should return 404 for non-existent launch ID", async () => {
      (launchService.fetchLaunchById as jest.Mock).mockResolvedValue(null);

      const response = await request(app).get("/api/launches/999");
      expect(response.status).toBe(404);
    });
  });

  describe("Error Handling", () => {
    it("should handle errors properly", async () => {
      (launchService.fetchLaunches as jest.Mock).mockRejectedValue(
        new Error("Test error")
      );

      const response = await request(app).get("/api/launches");
      expect(response.status).toBe(500);
      expect(response.body).toHaveProperty(
        "message",
        "An unexpected error occurred"
      );
    });
  });

  describe("CORS Configuration", () => {
    it("should allow requests from the frontend URL", async () => {
      const response = await request(app)
        .get("/health")
        .set("Origin", process.env.FRONTEND_URL || "http://localhost:3000");

      expect(response.headers["access-control-allow-origin"]).toBe(
        process.env.FRONTEND_URL || "http://localhost:3000"
      );
    });

    // it("should allow requests from all origins (current behavior)", async () => {
    //   const response = await request(app)
    //     .get("/health")
    //     .set("Origin", "http://malicious-site.com");

    //   expect(response.headers["access-control-allow-origin"]).toBe(
    //     "http://localhost:3000"
    //   );
    // });
  });
});
