interface TeacherAttributes {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

interface DirectorsAttributes extends TeacherAttributes {
    numberOfReports: number;
}
class Teacher {
    private _firstName: string;
    private _lastName: string;
    private _fullTimeEmployee: boolean;
    private _yearsOfExperience?: number;
    private _location: string;
    private _numberOfReports?: number;

    constructor(attributes: TeacherAttributes) {
        this._firstName = attributes.firstName;
        this._lastName = attributes.lastName;
        this._fullTimeEmployee = attributes.fullTimeEmployee;
        this._location = attributes.location;

        if (attributes.yearsOfExperience !== undefined) {
            this._yearsOfExperience = attributes.yearsOfExperience;
        }

        if ('numberOfReports' in attributes) {
            this._numberOfReports = attributes.numberOfReports;
        }
    }

    get firstName(): string { return this._firstName; }

    get lastName(): string { return this._lastName; }

    get fullTimeEmployee(): boolean { return this._fullTimeEmployee; }

    get location(): string { return this._location; }

    get yearsOfExperience(): number | undefined { return this._yearsOfExperience }

    get numberOfReports(): number | undefined { return this._numberOfReports }
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    const firstInitial = firstName.charAt(0).toUpperCase();
    const formattedLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
    return `${firstInitial}, ${formattedLastName}`;
};

interface StudentAttributes {
    firstName: string;
    lastName: string;
}

interface StudentInterface {
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentInterface {
    private _firstName: string;
    private _lastName: string;

    constructor(attributes: StudentAttributes) {
        this._firstName = attributes.firstName;
        this._lastName = attributes.lastName;
    }

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this._firstName;
    }
}
