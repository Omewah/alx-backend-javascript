interface TeacherAttributes {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

class Teacher {
    private _firstName: string;
    private _lastName: string;
    private _fullTimeEmployee: boolean;
    private _yearsOfExperience: number;
    private _location: string;

    constructor(attributes: TeacherAttributes) {
        this._firstName = attributes.firstName;
        this._lastName = attributes.lastName;
        this._fullTimeEmployee = attributes.fullTimeEmployee;
        this._location = attributes.location;

        if (attributes.yearsOfExperience !== undefined) {
            this._yearsOfExperience = attributes.yearsOfExperience;
        }
    }

    get firstName(): string { return this._firstName; }

    get lastName(): string { return this._lastName; }

    get fullTimeEmployee(): boolean { return this._fullTimeEmployee; }

    get location(): string { return this._location; }

    get yearsOfExperience(): number | undefined { return this._yearsOfExperience }
}
