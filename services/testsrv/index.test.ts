import { vi, test } from "vitest";
import { testFn, testFnTs } from "./index";

// this works
vi.mock("@myorg/testpkg", async () => {
  const actual = (await vi.importActual("@myorg/testpkg")) as any;
  return {
    ...actual,
  };
});

// this fails
vi.mock("@myorg/testpkgts", async () => {
  const actual = (await vi.importActual("@myorg/testpkgts")) as any;
  return {
    ...actual,
  };
});

test("mock", async () => {
  testFn();
  testFnTs();
});
