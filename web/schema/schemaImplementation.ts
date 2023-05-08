// To parse this data:
//
//   import { Convert, SchemaImplementation } from "./file";
//
//   const schemaImplementation = Convert.toSchemaImplementation(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface SchemaImplementation {
    /**
     * link to the version of the schema that can validate the resume
     */
    $schema?: string;
    /**
     * Specify any awards you have received throughout your professional career
     */
    awards?: Award[];
    /**
     * Specify any certificates you have received throughout your professional career
     */
    certificates?: Certificate[];
    /**
     * Custom Sections
     */
    custom?: Custom[];
    /**
     * List your education.
     */
    education?: Education[];
    interests?: Interest[];
    /**
     * List any other languages you speak
     */
    languages?: Language[];
    /**
     * The schema version and any other tooling configuration lives here
     */
    meta?:         Meta;
    personalInfo?: PersonalInfo;
    /**
     * Specify any number of social networks that you participate in
     */
    profiles?: Profile[];
    /**
     * Specify career projects
     */
    projects?: Project[];
    /**
     * Specify your publications through your career
     */
    publications?: Publication[];
    /**
     * Specify references
     */
    references?: Reference[];
    /**
     * List out your professional skill-set
     */
    skills?: Skill[];
    /**
     * Volunteering experience. Should be from oldest to most recent.
     */
    volunteer?: Volunteer[];
    /**
     * Work experience. Should be from oldest to most recent.
     */
    work?: Work[];
}

export interface Award {
    /**
     * e.g. Time Magazine
     */
    awarder?: string;
    date?:    string;
    /**
     * e.g. Received for my work with Quantum Physics
     */
    summary?: string;
    /**
     * e.g. One of the 100 greatest minds of the century
     */
    title?: string;
    [property: string]: any;
}

export interface Certificate {
    /**
     * e.g. 1989-06-12
     */
    date?: Date;
    /**
     * e.g. CNCF
     */
    issuer?: string;
    /**
     * e.g. Certified Kubernetes Administrator
     */
    name?: string;
    /**
     * e.g. http://example.com
     */
    url?: string;
    [property: string]: any;
}

export interface Custom {
    /**
     * Content of custom section
     */
    content?: string;
    endDate?: string;
    icon?:    string;
    /**
     * Specify special elements involved
     */
    keywords?: string[];
    /**
     * e.g. Master or Novice
     */
    level?: string;
    /**
     * Level of skill in a number from 1 to 5
     */
    levelNumber?: number;
    startDate?:   string;
    /**
     * Sub title of custom section
     */
    subtitle?: string;
    /**
     * Title of custom section
     */
    title?: string;
    /**
     * e.g. http://www.computer.org/csdl/mags/co/1996/10/rx069-abs.html
     */
    url?: string;
    [property: string]: any;
}

export interface Education {
    /**
     * e.g. Arts
     */
    area?: string;
    /**
     * List notable courses/subjects
     */
    courses?: string[];
    endDate?: string;
    /**
     * e.g. Massachusetts Institute of Technology
     */
    institution?: string;
    /**
     * grade point average, e.g. 3.67/4.0
     */
    score?:     string;
    startDate?: string;
    /**
     * e.g. Bachelor
     */
    studyType?: string;
    /**
     * e.g. http://facebook.example.com
     */
    url?: string;
    [property: string]: any;
}

export interface Interest {
    keywords?: string[];
    /**
     * e.g. Philosophy
     */
    name?: string;
    [property: string]: any;
}

export interface Language {
    /**
     * e.g. Fluent, Beginner
     */
    fluency?: string;
    /**
     * e.g. English, Spanish
     */
    language?: string;
    [property: string]: any;
}

/**
 * The schema version and any other tooling configuration lives here
 */
export interface Meta {
    /**
     * URL (as per RFC 3986) to latest version of this document
     */
    canonical?: string;
    /**
     * Using ISO 8601 with YYYY-MM-DDThh:mm:ss
     */
    lastModified?: string;
    /**
     * A version field which follows semver - e.g. v1.0.0
     */
    version?: string;
    [property: string]: any;
}

export interface PersonalInfo {
    /**
     * e.g. thomas@gmail.com
     */
    email?:    string;
    image?:    string;
    location?: Location;
    name?:     string;
    /**
     * Phone numbers are stored as strings so use any format you like, e.g. 712-117-2923
     */
    phone?: string;
    /**
     * Write a short 2-3 sentence biography about yourself
     */
    summary?: string;
    /**
     * e.g. Web Developer
     */
    title?: string;
    /**
     * URL (as per RFC 3986) to your website, e.g. personal homepage
     */
    url?: string;
    [property: string]: any;
}

export interface Location {
    /**
     * eg. 1234 Glücklichkeit Straße
     */
    address?: string;
    city?:    string;
    /**
     * Name of country.
     */
    country?:    string;
    postalCode?: string;
    /**
     * The general region where you live. Can be a US state, or a province, for instance.
     */
    region?: string;
    [property: string]: any;
}

export interface Profile {
    /**
     * A color override for the profile
     */
    color?: string;
    icon?:  string;
    id:     string;
    /**
     * e.g. Facebook or Twitter
     */
    network?: string;
    /**
     * e.g. http://twitter.example.com/johndoe
     */
    url?: string;
    /**
     * e.g. johndoe
     */
    username?: string;
    [property: string]: any;
}

export interface Project {
    /**
     * Short summary of project. e.g. Collated works of 2017.
     */
    description?: string;
    endDate?:     string;
    images?:      string[];
    /**
     * Specify special elements involved
     */
    keywords?: string[];
    /**
     * e.g. The World Wide Web
     */
    name?:      string;
    startDate?: string;
    /**
     * Give a summary of this project
     */
    summary?: string;
    /**
     * e.g. http://www.computer.org/csdl/mags/co/1996/10/rx069-abs.html
     */
    url?: string;
    [property: string]: any;
}

export interface Publication {
    /**
     * e.g. The World Wide Web
     */
    name?: string;
    /**
     * e.g. IEEE, Computer Magazine
     */
    publisher?:   string;
    releaseDate?: string;
    /**
     * Short summary of publication. e.g. Discussion of the World Wide Web, HTTP, HTML.
     */
    summary?: string;
    /**
     * e.g. http://www.computer.org.example.com/csdl/mags/co/1996/10/rx069-abs.html
     */
    url?: string;
    [property: string]: any;
}

export interface Reference {
    image?: string;
    [property: string]: any;
}

export interface Skill {
    /**
     * List some keywords pertaining to this skill
     */
    keywords?: string[];
    /**
     * e.g. Master or Novice
     */
    level?: string;
    /**
     * Level of skill in a number from 1 to 5
     */
    levelNumber?: number;
    /**
     * e.g. Web Development
     */
    name?: string;
    [property: string]: any;
}

export interface Volunteer {
    endDate?: string;
    /**
     * e.g. Facebook
     */
    organization?: string;
    /**
     * e.g. Software Engineer
     */
    position?:  string;
    startDate?: string;
    /**
     * Give an overview of your responsibilities at the company
     */
    summary?: string;
    /**
     * e.g. http://facebook.example.com
     */
    url?: string;
    [property: string]: any;
}

export interface Work {
    endDate?: string;
    /**
     * e.g. Menlo Park, CA
     */
    location?: string;
    /**
     * e.g. Facebook
     */
    name?: string;
    /**
     * e.g. Software Engineer
     */
    position?:  string;
    startDate?: string;
    /**
     * Give an overview of your responsibilities and experiences at the company.
     */
    summary?: string;
    /**
     * e.g. http://facebook.example.com
     */
    url?: string;
    [property: string]: any;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toSchemaImplementation(json: string): SchemaImplementation {
        return cast(JSON.parse(json), r("SchemaImplementation"));
    }

    public static schemaImplementationToJson(value: SchemaImplementation): string {
        return JSON.stringify(uncast(value, r("SchemaImplementation")), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any, parent: any = ''): never {
    const prettyTyp = prettyTypeName(typ);
    const parentText = parent ? ` on ${parent}` : '';
    const keyText = key ? ` for key "${key}"` : '';
    throw Error(`Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(val)}`);
}

function prettyTypeName(typ: any): string {
    if (Array.isArray(typ)) {
        if (typ.length === 2 && typ[0] === undefined) {
            return `an optional ${prettyTypeName(typ[1])}`;
        } else {
            return `one of [${typ.map(a => { return prettyTypeName(a); }).join(", ")}]`;
        }
    } else if (typeof typ === "object" && typ.literal !== undefined) {
        return typ.literal;
    } else {
        return typeof typ;
    }
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = '', parent: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key, parent);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val, key, parent);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases.map(a => { return l(a); }), val, key, parent);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue(l("array"), val, key, parent);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue(l("Date"), val, key, parent);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue(l(ref || "object"), val, key, parent);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, key, ref);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key, ref);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val, key, parent);
    }
    if (typ === false) return invalidValue(typ, val, key, parent);
    let ref: any = undefined;
    while (typeof typ === "object" && typ.ref !== undefined) {
        ref = typ.ref;
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val, key, parent);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function l(typ: any) {
    return { literal: typ };
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "SchemaImplementation": o([
        { json: "$schema", js: "$schema", typ: u(undefined, "") },
        { json: "awards", js: "awards", typ: u(undefined, a(r("Award"))) },
        { json: "certificates", js: "certificates", typ: u(undefined, a(r("Certificate"))) },
        { json: "custom", js: "custom", typ: u(undefined, a(r("Custom"))) },
        { json: "education", js: "education", typ: u(undefined, a(r("Education"))) },
        { json: "interests", js: "interests", typ: u(undefined, a(r("Interest"))) },
        { json: "languages", js: "languages", typ: u(undefined, a(r("Language"))) },
        { json: "meta", js: "meta", typ: u(undefined, r("Meta")) },
        { json: "personalInfo", js: "personalInfo", typ: u(undefined, r("PersonalInfo")) },
        { json: "profiles", js: "profiles", typ: u(undefined, a(r("Profile"))) },
        { json: "projects", js: "projects", typ: u(undefined, a(r("Project"))) },
        { json: "publications", js: "publications", typ: u(undefined, a(r("Publication"))) },
        { json: "references", js: "references", typ: u(undefined, a(r("Reference"))) },
        { json: "skills", js: "skills", typ: u(undefined, a(r("Skill"))) },
        { json: "volunteer", js: "volunteer", typ: u(undefined, a(r("Volunteer"))) },
        { json: "work", js: "work", typ: u(undefined, a(r("Work"))) },
    ], false),
    "Award": o([
        { json: "awarder", js: "awarder", typ: u(undefined, "") },
        { json: "date", js: "date", typ: u(undefined, "") },
        { json: "summary", js: "summary", typ: u(undefined, "") },
        { json: "title", js: "title", typ: u(undefined, "") },
    ], "any"),
    "Certificate": o([
        { json: "date", js: "date", typ: u(undefined, Date) },
        { json: "issuer", js: "issuer", typ: u(undefined, "") },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "url", js: "url", typ: u(undefined, "") },
    ], "any"),
    "Custom": o([
        { json: "content", js: "content", typ: u(undefined, "") },
        { json: "endDate", js: "endDate", typ: u(undefined, "") },
        { json: "icon", js: "icon", typ: u(undefined, "") },
        { json: "keywords", js: "keywords", typ: u(undefined, a("")) },
        { json: "level", js: "level", typ: u(undefined, "") },
        { json: "levelNumber", js: "levelNumber", typ: u(undefined, 0) },
        { json: "startDate", js: "startDate", typ: u(undefined, "") },
        { json: "subtitle", js: "subtitle", typ: u(undefined, "") },
        { json: "title", js: "title", typ: u(undefined, "") },
        { json: "url", js: "url", typ: u(undefined, "") },
    ], "any"),
    "Education": o([
        { json: "area", js: "area", typ: u(undefined, "") },
        { json: "courses", js: "courses", typ: u(undefined, a("")) },
        { json: "endDate", js: "endDate", typ: u(undefined, "") },
        { json: "institution", js: "institution", typ: u(undefined, "") },
        { json: "score", js: "score", typ: u(undefined, "") },
        { json: "startDate", js: "startDate", typ: u(undefined, "") },
        { json: "studyType", js: "studyType", typ: u(undefined, "") },
        { json: "url", js: "url", typ: u(undefined, "") },
    ], "any"),
    "Interest": o([
        { json: "keywords", js: "keywords", typ: u(undefined, a("")) },
        { json: "name", js: "name", typ: u(undefined, "") },
    ], "any"),
    "Language": o([
        { json: "fluency", js: "fluency", typ: u(undefined, "") },
        { json: "language", js: "language", typ: u(undefined, "") },
    ], "any"),
    "Meta": o([
        { json: "canonical", js: "canonical", typ: u(undefined, "") },
        { json: "lastModified", js: "lastModified", typ: u(undefined, "") },
        { json: "version", js: "version", typ: u(undefined, "") },
    ], "any"),
    "PersonalInfo": o([
        { json: "email", js: "email", typ: u(undefined, "") },
        { json: "image", js: "image", typ: u(undefined, "") },
        { json: "location", js: "location", typ: u(undefined, r("Location")) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "phone", js: "phone", typ: u(undefined, "") },
        { json: "summary", js: "summary", typ: u(undefined, "") },
        { json: "title", js: "title", typ: u(undefined, "") },
        { json: "url", js: "url", typ: u(undefined, "") },
    ], "any"),
    "Location": o([
        { json: "address", js: "address", typ: u(undefined, "") },
        { json: "city", js: "city", typ: u(undefined, "") },
        { json: "country", js: "country", typ: u(undefined, "") },
        { json: "postalCode", js: "postalCode", typ: u(undefined, "") },
        { json: "region", js: "region", typ: u(undefined, "") },
    ], "any"),
    "Profile": o([
        { json: "color", js: "color", typ: u(undefined, "") },
        { json: "icon", js: "icon", typ: u(undefined, "") },
        { json: "id", js: "id", typ: "" },
        { json: "network", js: "network", typ: u(undefined, "") },
        { json: "url", js: "url", typ: u(undefined, "") },
        { json: "username", js: "username", typ: u(undefined, "") },
    ], "any"),
    "Project": o([
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "endDate", js: "endDate", typ: u(undefined, "") },
        { json: "images", js: "images", typ: u(undefined, a("")) },
        { json: "keywords", js: "keywords", typ: u(undefined, a("")) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "startDate", js: "startDate", typ: u(undefined, "") },
        { json: "summary", js: "summary", typ: u(undefined, "") },
        { json: "url", js: "url", typ: u(undefined, "") },
    ], "any"),
    "Publication": o([
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "publisher", js: "publisher", typ: u(undefined, "") },
        { json: "releaseDate", js: "releaseDate", typ: u(undefined, "") },
        { json: "summary", js: "summary", typ: u(undefined, "") },
        { json: "url", js: "url", typ: u(undefined, "") },
    ], "any"),
    "Reference": o([
        { json: "image", js: "image", typ: u(undefined, "") },
    ], "any"),
    "Skill": o([
        { json: "keywords", js: "keywords", typ: u(undefined, a("")) },
        { json: "level", js: "level", typ: u(undefined, "") },
        { json: "levelNumber", js: "levelNumber", typ: u(undefined, 0) },
        { json: "name", js: "name", typ: u(undefined, "") },
    ], "any"),
    "Volunteer": o([
        { json: "endDate", js: "endDate", typ: u(undefined, "") },
        { json: "organization", js: "organization", typ: u(undefined, "") },
        { json: "position", js: "position", typ: u(undefined, "") },
        { json: "startDate", js: "startDate", typ: u(undefined, "") },
        { json: "summary", js: "summary", typ: u(undefined, "") },
        { json: "url", js: "url", typ: u(undefined, "") },
    ], "any"),
    "Work": o([
        { json: "endDate", js: "endDate", typ: u(undefined, "") },
        { json: "location", js: "location", typ: u(undefined, "") },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "position", js: "position", typ: u(undefined, "") },
        { json: "startDate", js: "startDate", typ: u(undefined, "") },
        { json: "summary", js: "summary", typ: u(undefined, "") },
        { json: "url", js: "url", typ: u(undefined, "") },
    ], "any"),
};
