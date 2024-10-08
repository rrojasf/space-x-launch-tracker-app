import { NextFunction, Request, Response } from "express";
import {
  fetchAllLaunches,
  fetchLaunchById,
  fetchLaunches,
} from "../services/launch/launchService";

export const getAllLaunches = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const type = req.query.type as string;
    const launches = await fetchAllLaunches();
    res.json(launches);
  } catch (error) {
    next(error);
  }
};

export const getLaunches = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const type = req.query.type as string;
    const launches = await fetchLaunches(type);
    res.json(launches);
  } catch (error) {
    next(error);
  }
};

export const getLaunchById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const launch = await fetchLaunchById(id);
    if (!launch) {
      return res.status(404).json({ message: "Launch not found" });
    }
    res.json(launch);
  } catch (error) {
    next(error);
  }
};
