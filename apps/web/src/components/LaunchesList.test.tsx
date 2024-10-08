import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { fireEvent, render, screen } from "@testing-library/react";
import LaunchesList from "../components/LaunchesList";
import { AppProvider } from "../context/AppContext";

// Mock Chakra UI components
jest.mock("@chakra-ui/react", () => ({
  Button: ({ children, onClick }: any) => (
    <button onClick={onClick}>{children}</button>
  ),
  Flex: ({ children }: any) => <div>{children}</div>,
  Stack: ({ children }: any) => <div>{children}</div>,
  VStack: ({ children }: any) => <div>{children}</div>,
}));

// Mock LaunchCard component
jest.mock("../components/LaunchCard", () => ({
  __esModule: true,
  default: ({ launch }: any) => <div>{launch.name}</div>,
}));

// Mock the useAppContext hook
jest.mock("../context/AppContext", () => ({
  ...jest.requireActual("../context/AppContext"),
  useAppContext: () => ({
    launches: [
      {
        id: "1",
        name: "Past Launch",
        upcoming: false,
        success: true,
        date_utc: "2023-01-01T00:00:00.000Z",
      },
      {
        id: "2",
        name: "Upcoming Launch",
        upcoming: true,
        date_utc: "2025-01-01T00:00:00.000Z",
      },
      {
        id: "3",
        name: "Failed Launch",
        upcoming: false,
        success: false,
        date_utc: "2023-06-01T00:00:00.000Z",
      },
    ],
    favorites: ["1"],
    loading: false,
    error: null,
    toggleFavorite: jest.fn(),
    isFavorite: (id: string) => id === "1",
  }),
}));

// Create a wrapper component that includes all necessary providers
const AllTheProviders: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>{children}</AppProvider>
    </QueryClientProvider>
  );
};

describe("LaunchesList Filter Functionality", () => {
  const renderLaunchesList = (initialFilter = "all") => {
    return render(
      <LaunchesList filter={initialFilter} onFilterChange={jest.fn()} />,
      { wrapper: AllTheProviders },
    );
  };

  it('shows all launches when "All" filter is selected', () => {
    renderLaunchesList();
    expect(screen.getByText("Past Launch")).toBeInTheDocument();
    expect(screen.getByText("Upcoming Launch")).toBeInTheDocument();
    expect(screen.getByText("Failed Launch")).toBeInTheDocument();
  });

  it('shows only upcoming launches when "Upcoming" filter is selected', () => {
    renderLaunchesList("upcoming");
    expect(screen.queryByText("Past Launch")).not.toBeInTheDocument();
    expect(screen.getByText("Upcoming Launch")).toBeInTheDocument();
    expect(screen.queryByText("Failed Launch")).not.toBeInTheDocument();
  });

  it('shows only past launches when "Past" filter is selected', () => {
    renderLaunchesList("past");
    expect(screen.getByText("Past Launch")).toBeInTheDocument();
    expect(screen.queryByText("Upcoming Launch")).not.toBeInTheDocument();
    expect(screen.getByText("Failed Launch")).toBeInTheDocument();
  });

  it("changes filter when a filter button is clicked", () => {
    const onFilterChange = jest.fn();
    render(<LaunchesList filter="all" onFilterChange={onFilterChange} />, {
      wrapper: AllTheProviders,
    });

    fireEvent.click(screen.getByText("Upcoming"));
    expect(onFilterChange).toHaveBeenCalledWith("upcoming");

    fireEvent.click(screen.getByText("Past"));
    expect(onFilterChange).toHaveBeenCalledWith("past");

    fireEvent.click(screen.getByText("All"));
    expect(onFilterChange).toHaveBeenCalledWith("all");
  });
});
