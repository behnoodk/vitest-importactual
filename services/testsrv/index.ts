import MyClass from "@myorg/testpkg";
import MyClassTs from "@myorg/testpkgts";

export function testFn() {
  const testInstance = new MyClass();
  console.log(testInstance);
  testInstance.method1();
}

export function testFnTs() {
  const testInstance = new MyClassTs();
  console.log(testInstance);
  testInstance.method1();
}
