import { render } from "@testing-library/react";
import React, { act } from "react";
import { AppProvider, useAppContext } from "../context/AppContext";
import { useAllLaunches } from "../hooks/useAllLaunches";
import { useFavorites } from "../hooks/useFavorites";

// Mock the hooks used in AppContext
jest.mock("../hooks/useAllLaunches");
jest.mock("../hooks/useFavorites");

// Test component that uses the context
const TestComponent: React.FC = () => {
  const context = useAppContext();
  return (
    <div>
      <div data-testid="launches-length">{context.launches.length}</div>
      <div data-testid="loading">{context.loading.toString()}</div>
      <div data-testid="favorites-length">{context.favorites.length}</div>
      <button onClick={() => context.toggleFavorite("test-id")}>
        Add to Favorites
      </button>
    </div>
  );
};

describe("AppContext", () => {
  beforeEach(() => {
    // Reset mocks before each test
    jest.resetAllMocks();
  });

  it("provides launches data to children", () => {
    (useAllLaunches as jest.Mock).mockReturnValue({
      launchesResponse: { docs: [{ id: "1" }, { id: "2" }] },
      isLoading: false,
      error: null,
    });
    (useFavorites as jest.Mock).mockReturnValue({
      favorites: [],
      toggleFavorite: jest.fn(),
      isFavorite: jest.fn(),
    });

    const { getByTestId } = render(
      <AppProvider>
        <TestComponent />
      </AppProvider>
    );

    expect(getByTestId("launches-length").textContent).toBe("2");
    expect(getByTestId("loading").textContent).toBe("false");
  });

  it("provides loading state to children", () => {
    (useAllLaunches as jest.Mock).mockReturnValue({
      launchesResponse: { docs: [] },
      isLoading: true,
      error: null,
    });
    (useFavorites as jest.Mock).mockReturnValue({
      favorites: [],
      toggleFavorite: jest.fn(),
      isFavorite: jest.fn(),
    });

    const { getByTestId } = render(
      <AppProvider>
        <TestComponent />
      </AppProvider>
    );

    expect(getByTestId("loading").textContent).toBe("true");
  });

  it("provides favorites functionality to children", () => {
    const mockToggleFavorite = jest.fn();
    (useAllLaunches as jest.Mock).mockReturnValue({
      launchesResponse: { docs: [] },
      isLoading: false,
      error: null,
    });
    (useFavorites as jest.Mock).mockReturnValue({
      favorites: ["test-id"],
      toggleFavorite: mockToggleFavorite,
      isFavorite: jest.fn(),
    });

    const { getByTestId, getByText } = render(
      <AppProvider>
        <TestComponent />
      </AppProvider>
    );

    expect(getByTestId("favorites-length").textContent).toBe("1");

    act(() => {
      getByText("Add to Favorites").click();
    });
    expect(mockToggleFavorite).toHaveBeenCalledWith("test-id");
  });

  it("throws an error when useAppContext is used outside of AppProvider", () => {
    const consoleErrorSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    expect(() => render(<TestComponent />)).toThrow(
      "useAppContext must be used within an AppProvider"
    );

    consoleErrorSpy.mockRestore();
  });
});
