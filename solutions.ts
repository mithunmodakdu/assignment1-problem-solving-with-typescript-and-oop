function multiplyValue(value: number, multiplier?: number): number {
  return value * (multiplier ?? 2);
}


type TInput = string | number | boolean;
type TOutput = string | number;

function processInput(input: TInput): TOutput {
  if (typeof input === "string") {
    return input.trim().toLowerCase();
  } else if (typeof input === "number") {
    return input * 10;
  } else {
    return input === true ? "Active" : "Inactive";
  }
}


function formatCoordinate(
  coordinates: readonly [number, number, string],
): string {
  const [latitude, longitude, locationName] = coordinates;
  return `Location: ${locationName} (${latitude}, ${longitude})`;
}


function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.flat();
}


interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

function getPopularCourses(courses: Course[], minStudents: number): Course[] {
  const result = courses.filter(
    (course) => course.isPublished === true && course.students >= minStudents,
  );
  return result;
}


function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  const result = items.map((item) => item[key]);
  return result;
}


class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}


function validateAgeAsync(age: number): Promise<string> {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    } else {
      reject(new Error("Access Denied: Must be 18 or older"));
    }
  });

};






