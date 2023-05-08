// To parse this data:
//
//   import { Convert, Schema } from "./file";
//
//   const schema = Convert.toSchema(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Schema {
    $schema:              string;
    additionalProperties: boolean;
    title:                string;
    type:                 string;
    definitions:          Definitions;
    properties:           SchemaProperties;
}

export interface Definitions {
    iso8601:          Iso8601;
    imageUrlOrStatic: Icon;
    icon:             Icon;
    id:               Icon;
}

export interface Icon {
    type:        Type;
    description: string;
}

export enum Type {
    Array = "array",
    String = "string",
}

export interface Iso8601 {
    type:        Type;
    description: string;
    pattern:     string;
}

export interface SchemaProperties {
    $schema:      SchemaClass;
    personalInfo: PersonalInfo;
    profiles:     Profiles;
    work:         Work;
    education:    Education;
    awards:       Awards;
    certificates: Certificates;
    publications: Publications;
    skills:       Skills;
    languages:    Languages;
    interests:    Interests;
    volunteer:    Volunteer;
    projects:     Projects;
    references:   References;
    custom:       SchemaClass;
    meta:         Meta;
}

export interface PurpleProperties {
    icon:        Image;
    title:       SchemaClass;
    subtitle:    SchemaClass;
    startDate:   Image;
    endDate:     Image;
    url:         SchemaClass;
    level:       Phone;
    levelNumber: LevelNumber;
    content:     Phone;
    keywords:    Keywords;
}

export interface SchemaItems {
    type:                 string;
    additionalProperties: boolean;
    properties:           PurpleProperties;
}

export interface SchemaClass {
    type:        Type;
    description: string;
    format?:     string;
    metaName?:   string;
    items?:      SchemaItems;
    markdown?:   boolean;
}

export interface Phone {
    metaName:    string;
    type:        Type;
    description: string;
    markdown?:   boolean;
    format?:     string;
}

export interface Image {
    metaName: string;
    $ref:     Ref;
}

export enum Ref {
    DefinitionsIcon = "#/definitions/icon",
    DefinitionsIso8601 = "#/definitions/iso8601",
}

export interface Keywords {
    metaName:        string;
    type:            Type;
    description?:    string;
    additionalItems: boolean;
    items:           Icon;
}

export interface LevelNumber {
    metaName:    string;
    type:        string;
    minimum:     number;
    maximum:     number;
    description: string;
}

export interface Awards {
    metaName:        string;
    type:            Type;
    description:     string;
    additionalItems: boolean;
    items:           AwardsItems;
}

export interface AwardsItems {
    type:                 string;
    additionalProperties: boolean;
    properties:           FluffyProperties;
}

export interface FluffyProperties {
    title:   Phone;
    date:    Image;
    awarder: Phone;
    summary: Phone;
}

export interface Certificates {
    metaName:        string;
    type:            Type;
    description:     string;
    additionalItems: boolean;
    items:           CertificatesItems;
}

export interface CertificatesItems {
    type:                 string;
    additionalProperties: boolean;
    properties:           TentacledProperties;
}

export interface TentacledProperties {
    name:   SchemaClass;
    date:   SchemaClass;
    url:    SchemaClass;
    issuer: SchemaClass;
}

export interface Education {
    metaName:        string;
    description:     string;
    type:            Type;
    additionalItems: boolean;
    items:           EducationItems;
}

export interface EducationItems {
    type:                 string;
    additionalProperties: boolean;
    properties:           StickyProperties;
}

export interface StickyProperties {
    institution: Phone;
    url:         Phone;
    area:        Phone;
    studyType:   Phone;
    startDate:   EndDate;
    endDate:     EndDate;
    score:       Phone;
    courses:     Keywords;
}

export interface EndDate {
    $ref: string;
}

export interface Interests {
    metaName:        string;
    type:            Type;
    additionalItems: boolean;
    items:           InterestsItems;
}

export interface InterestsItems {
    type:                 string;
    additionalProperties: boolean;
    properties:           IndigoProperties;
}

export interface IndigoProperties {
    name:     SchemaClass;
    keywords: Keywords;
}

export interface Languages {
    metaName:        string;
    type:            Type;
    description:     string;
    additionalItems: boolean;
    items:           LanguagesItems;
}

export interface LanguagesItems {
    type:                 string;
    additionalProperties: boolean;
    properties:           IndecentProperties;
}

export interface IndecentProperties {
    language: Phone;
    fluency:  Phone;
}

export interface Meta {
    type:                 string;
    description:          string;
    additionalProperties: boolean;
    properties:           MetaProperties;
}

export interface MetaProperties {
    canonical:    SchemaClass;
    version:      Icon;
    lastModified: Icon;
}

export interface PersonalInfo {
    metaName:             string;
    type:                 string;
    additionalProperties: boolean;
    properties:           PersonalInfoProperties;
}

export interface PersonalInfoProperties {
    image:    Image;
    name:     Name;
    title:    Phone;
    email:    SchemaClass;
    phone:    Phone;
    url:      Phone;
    summary:  Phone;
    location: Location;
}

export interface Location {
    metaName:             string;
    type:                 string;
    additionalProperties: boolean;
    properties:           LocationProperties;
}

export interface LocationProperties {
    address:    SchemaClass;
    postalCode: Name;
    city:       Name;
    country:    Phone;
    region:     Phone;
}

export interface Name {
    metaName: string;
    type:     Type;
}

export interface Profiles {
    metaName:        string;
    type:            Type;
    description:     string;
    additionalItems: boolean;
    items:           ProfilesItems;
}

export interface ProfilesItems {
    required:             string[];
    uniqueItems:          boolean;
    type:                 string;
    additionalProperties: boolean;
    properties:           HilariousProperties;
}

export interface HilariousProperties {
    id:       EndDate;
    network:  SchemaClass;
    username: SchemaClass;
    url:      SchemaClass;
    color:    Icon;
    icon:     EndDate;
}

export interface Projects {
    metaName:        string;
    type:            Type;
    description:     string;
    additionalItems: boolean;
    items:           ProjectsItems;
}

export interface ProjectsItems {
    type:                 string;
    additionalProperties: boolean;
    properties:           AmbitiousProperties;
}

export interface AmbitiousProperties {
    images:      Images;
    name:        Phone;
    description: Phone;
    startDate:   Image;
    endDate:     Image;
    url:         SchemaClass;
    summary:     SchemaClass;
    keywords:    Keywords;
}

export interface Images {
    metaName:        string;
    type:            Type;
    additionalItems: boolean;
    items:           EndDate;
}

export interface Publications {
    metaName:        string;
    type:            Type;
    description:     string;
    additionalItems: boolean;
    items:           PublicationsItems;
}

export interface PublicationsItems {
    type:                 string;
    additionalProperties: boolean;
    properties:           CunningProperties;
}

export interface CunningProperties {
    name:        Phone;
    publisher:   Phone;
    releaseDate: Image;
    url:         Phone;
    summary:     Phone;
}

export interface References {
    metaName:        string;
    type:            Type;
    additionalItems: boolean;
    description:     string;
    items:           ReferencesItems;
}

export interface ReferencesItems {
    type:                 string;
    additionalProperties: boolean;
    properties:           MagentaProperties;
}

export interface MagentaProperties {
    image: Name;
}

export interface Skills {
    metaName:        string;
    type:            Type;
    description:     string;
    additionalItems: boolean;
    items:           SkillsItems;
}

export interface SkillsItems {
    type:                 string;
    additionalProperties: boolean;
    properties:           FriskyProperties;
}

export interface FriskyProperties {
    name:        SchemaClass;
    level:       SchemaClass;
    levelNumber: LevelNumber;
    keywords:    Keywords;
}

export interface Volunteer {
    metaName:        string;
    description:     string;
    type:            Type;
    additionalItems: boolean;
    items:           VolunteerItems;
}

export interface VolunteerItems {
    type:                 string;
    additionalProperties: boolean;
    properties:           MischievousProperties;
}

export interface MischievousProperties {
    organization: Phone;
    position:     Phone;
    url:          Phone;
    startDate:    Image;
    endDate:      Image;
    summary:      Phone;
}

export interface Work {
    metaName:        string;
    description:     string;
    type:            Type;
    additionalItems: boolean;
    items:           WorkItems;
}

export interface WorkItems {
    type:                 string;
    additionalProperties: boolean;
    properties:           BraggadociousProperties;
}

export interface BraggadociousProperties {
    name:      SchemaClass;
    location:  SchemaClass;
    position:  SchemaClass;
    url:       SchemaClass;
    startDate: Image;
    endDate:   Image;
    summary:   SchemaClass;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toSchema(json: string): Schema {
        return cast(JSON.parse(json), r("Schema"));
    }

    public static schemaToJson(value: Schema): string {
        return JSON.stringify(uncast(value, r("Schema")), null, 2);
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
    "Schema": o([
        { json: "$schema", js: "$schema", typ: "" },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "title", js: "title", typ: "" },
        { json: "type", js: "type", typ: "" },
        { json: "definitions", js: "definitions", typ: r("Definitions") },
        { json: "properties", js: "properties", typ: r("SchemaProperties") },
    ], false),
    "Definitions": o([
        { json: "iso8601", js: "iso8601", typ: r("Iso8601") },
        { json: "imageUrlOrStatic", js: "imageUrlOrStatic", typ: r("Icon") },
        { json: "icon", js: "icon", typ: r("Icon") },
        { json: "id", js: "id", typ: r("Icon") },
    ], false),
    "Icon": o([
        { json: "type", js: "type", typ: r("Type") },
        { json: "description", js: "description", typ: "" },
    ], false),
    "Iso8601": o([
        { json: "type", js: "type", typ: r("Type") },
        { json: "description", js: "description", typ: "" },
        { json: "pattern", js: "pattern", typ: "" },
    ], false),
    "SchemaProperties": o([
        { json: "$schema", js: "$schema", typ: r("SchemaClass") },
        { json: "personalInfo", js: "personalInfo", typ: r("PersonalInfo") },
        { json: "profiles", js: "profiles", typ: r("Profiles") },
        { json: "work", js: "work", typ: r("Work") },
        { json: "education", js: "education", typ: r("Education") },
        { json: "awards", js: "awards", typ: r("Awards") },
        { json: "certificates", js: "certificates", typ: r("Certificates") },
        { json: "publications", js: "publications", typ: r("Publications") },
        { json: "skills", js: "skills", typ: r("Skills") },
        { json: "languages", js: "languages", typ: r("Languages") },
        { json: "interests", js: "interests", typ: r("Interests") },
        { json: "volunteer", js: "volunteer", typ: r("Volunteer") },
        { json: "projects", js: "projects", typ: r("Projects") },
        { json: "references", js: "references", typ: r("References") },
        { json: "custom", js: "custom", typ: r("SchemaClass") },
        { json: "meta", js: "meta", typ: r("Meta") },
    ], false),
    "PurpleProperties": o([
        { json: "icon", js: "icon", typ: r("Image") },
        { json: "title", js: "title", typ: r("SchemaClass") },
        { json: "subtitle", js: "subtitle", typ: r("SchemaClass") },
        { json: "startDate", js: "startDate", typ: r("Image") },
        { json: "endDate", js: "endDate", typ: r("Image") },
        { json: "url", js: "url", typ: r("SchemaClass") },
        { json: "level", js: "level", typ: r("Phone") },
        { json: "levelNumber", js: "levelNumber", typ: r("LevelNumber") },
        { json: "content", js: "content", typ: r("Phone") },
        { json: "keywords", js: "keywords", typ: r("Keywords") },
    ], false),
    "SchemaItems": o([
        { json: "type", js: "type", typ: "" },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "properties", js: "properties", typ: r("PurpleProperties") },
    ], false),
    "SchemaClass": o([
        { json: "type", js: "type", typ: r("Type") },
        { json: "description", js: "description", typ: "" },
        { json: "format", js: "format", typ: u(undefined, "") },
        { json: "metaName", js: "metaName", typ: u(undefined, "") },
        { json: "items", js: "items", typ: u(undefined, r("SchemaItems")) },
        { json: "markdown", js: "markdown", typ: u(undefined, true) },
    ], false),
    "Phone": o([
        { json: "metaName", js: "metaName", typ: "" },
        { json: "type", js: "type", typ: r("Type") },
        { json: "description", js: "description", typ: "" },
        { json: "markdown", js: "markdown", typ: u(undefined, true) },
        { json: "format", js: "format", typ: u(undefined, "") },
    ], false),
    "Image": o([
        { json: "metaName", js: "metaName", typ: "" },
        { json: "$ref", js: "$ref", typ: r("Ref") },
    ], false),
    "Keywords": o([
        { json: "metaName", js: "metaName", typ: "" },
        { json: "type", js: "type", typ: r("Type") },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "additionalItems", js: "additionalItems", typ: true },
        { json: "items", js: "items", typ: r("Icon") },
    ], false),
    "LevelNumber": o([
        { json: "metaName", js: "metaName", typ: "" },
        { json: "type", js: "type", typ: "" },
        { json: "minimum", js: "minimum", typ: 0 },
        { json: "maximum", js: "maximum", typ: 0 },
        { json: "description", js: "description", typ: "" },
    ], false),
    "Awards": o([
        { json: "metaName", js: "metaName", typ: "" },
        { json: "type", js: "type", typ: r("Type") },
        { json: "description", js: "description", typ: "" },
        { json: "additionalItems", js: "additionalItems", typ: true },
        { json: "items", js: "items", typ: r("AwardsItems") },
    ], false),
    "AwardsItems": o([
        { json: "type", js: "type", typ: "" },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "properties", js: "properties", typ: r("FluffyProperties") },
    ], false),
    "FluffyProperties": o([
        { json: "title", js: "title", typ: r("Phone") },
        { json: "date", js: "date", typ: r("Image") },
        { json: "awarder", js: "awarder", typ: r("Phone") },
        { json: "summary", js: "summary", typ: r("Phone") },
    ], false),
    "Certificates": o([
        { json: "metaName", js: "metaName", typ: "" },
        { json: "type", js: "type", typ: r("Type") },
        { json: "description", js: "description", typ: "" },
        { json: "additionalItems", js: "additionalItems", typ: true },
        { json: "items", js: "items", typ: r("CertificatesItems") },
    ], false),
    "CertificatesItems": o([
        { json: "type", js: "type", typ: "" },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "properties", js: "properties", typ: r("TentacledProperties") },
    ], false),
    "TentacledProperties": o([
        { json: "name", js: "name", typ: r("SchemaClass") },
        { json: "date", js: "date", typ: r("SchemaClass") },
        { json: "url", js: "url", typ: r("SchemaClass") },
        { json: "issuer", js: "issuer", typ: r("SchemaClass") },
    ], false),
    "Education": o([
        { json: "metaName", js: "metaName", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "type", js: "type", typ: r("Type") },
        { json: "additionalItems", js: "additionalItems", typ: true },
        { json: "items", js: "items", typ: r("EducationItems") },
    ], false),
    "EducationItems": o([
        { json: "type", js: "type", typ: "" },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "properties", js: "properties", typ: r("StickyProperties") },
    ], false),
    "StickyProperties": o([
        { json: "institution", js: "institution", typ: r("Phone") },
        { json: "url", js: "url", typ: r("Phone") },
        { json: "area", js: "area", typ: r("Phone") },
        { json: "studyType", js: "studyType", typ: r("Phone") },
        { json: "startDate", js: "startDate", typ: r("EndDate") },
        { json: "endDate", js: "endDate", typ: r("EndDate") },
        { json: "score", js: "score", typ: r("Phone") },
        { json: "courses", js: "courses", typ: r("Keywords") },
    ], false),
    "EndDate": o([
        { json: "$ref", js: "$ref", typ: "" },
    ], false),
    "Interests": o([
        { json: "metaName", js: "metaName", typ: "" },
        { json: "type", js: "type", typ: r("Type") },
        { json: "additionalItems", js: "additionalItems", typ: true },
        { json: "items", js: "items", typ: r("InterestsItems") },
    ], false),
    "InterestsItems": o([
        { json: "type", js: "type", typ: "" },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "properties", js: "properties", typ: r("IndigoProperties") },
    ], false),
    "IndigoProperties": o([
        { json: "name", js: "name", typ: r("SchemaClass") },
        { json: "keywords", js: "keywords", typ: r("Keywords") },
    ], false),
    "Languages": o([
        { json: "metaName", js: "metaName", typ: "" },
        { json: "type", js: "type", typ: r("Type") },
        { json: "description", js: "description", typ: "" },
        { json: "additionalItems", js: "additionalItems", typ: true },
        { json: "items", js: "items", typ: r("LanguagesItems") },
    ], false),
    "LanguagesItems": o([
        { json: "type", js: "type", typ: "" },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "properties", js: "properties", typ: r("IndecentProperties") },
    ], false),
    "IndecentProperties": o([
        { json: "language", js: "language", typ: r("Phone") },
        { json: "fluency", js: "fluency", typ: r("Phone") },
    ], false),
    "Meta": o([
        { json: "type", js: "type", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "properties", js: "properties", typ: r("MetaProperties") },
    ], false),
    "MetaProperties": o([
        { json: "canonical", js: "canonical", typ: r("SchemaClass") },
        { json: "version", js: "version", typ: r("Icon") },
        { json: "lastModified", js: "lastModified", typ: r("Icon") },
    ], false),
    "PersonalInfo": o([
        { json: "metaName", js: "metaName", typ: "" },
        { json: "type", js: "type", typ: "" },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "properties", js: "properties", typ: r("PersonalInfoProperties") },
    ], false),
    "PersonalInfoProperties": o([
        { json: "image", js: "image", typ: r("Image") },
        { json: "name", js: "name", typ: r("Name") },
        { json: "title", js: "title", typ: r("Phone") },
        { json: "email", js: "email", typ: r("SchemaClass") },
        { json: "phone", js: "phone", typ: r("Phone") },
        { json: "url", js: "url", typ: r("Phone") },
        { json: "summary", js: "summary", typ: r("Phone") },
        { json: "location", js: "location", typ: r("Location") },
    ], false),
    "Location": o([
        { json: "metaName", js: "metaName", typ: "" },
        { json: "type", js: "type", typ: "" },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "properties", js: "properties", typ: r("LocationProperties") },
    ], false),
    "LocationProperties": o([
        { json: "address", js: "address", typ: r("SchemaClass") },
        { json: "postalCode", js: "postalCode", typ: r("Name") },
        { json: "city", js: "city", typ: r("Name") },
        { json: "country", js: "country", typ: r("Phone") },
        { json: "region", js: "region", typ: r("Phone") },
    ], false),
    "Name": o([
        { json: "metaName", js: "metaName", typ: "" },
        { json: "type", js: "type", typ: r("Type") },
    ], false),
    "Profiles": o([
        { json: "metaName", js: "metaName", typ: "" },
        { json: "type", js: "type", typ: r("Type") },
        { json: "description", js: "description", typ: "" },
        { json: "additionalItems", js: "additionalItems", typ: true },
        { json: "items", js: "items", typ: r("ProfilesItems") },
    ], false),
    "ProfilesItems": o([
        { json: "required", js: "required", typ: a("") },
        { json: "uniqueItems", js: "uniqueItems", typ: true },
        { json: "type", js: "type", typ: "" },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "properties", js: "properties", typ: r("HilariousProperties") },
    ], false),
    "HilariousProperties": o([
        { json: "id", js: "id", typ: r("EndDate") },
        { json: "network", js: "network", typ: r("SchemaClass") },
        { json: "username", js: "username", typ: r("SchemaClass") },
        { json: "url", js: "url", typ: r("SchemaClass") },
        { json: "color", js: "color", typ: r("Icon") },
        { json: "icon", js: "icon", typ: r("EndDate") },
    ], false),
    "Projects": o([
        { json: "metaName", js: "metaName", typ: "" },
        { json: "type", js: "type", typ: r("Type") },
        { json: "description", js: "description", typ: "" },
        { json: "additionalItems", js: "additionalItems", typ: true },
        { json: "items", js: "items", typ: r("ProjectsItems") },
    ], false),
    "ProjectsItems": o([
        { json: "type", js: "type", typ: "" },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "properties", js: "properties", typ: r("AmbitiousProperties") },
    ], false),
    "AmbitiousProperties": o([
        { json: "images", js: "images", typ: r("Images") },
        { json: "name", js: "name", typ: r("Phone") },
        { json: "description", js: "description", typ: r("Phone") },
        { json: "startDate", js: "startDate", typ: r("Image") },
        { json: "endDate", js: "endDate", typ: r("Image") },
        { json: "url", js: "url", typ: r("SchemaClass") },
        { json: "summary", js: "summary", typ: r("SchemaClass") },
        { json: "keywords", js: "keywords", typ: r("Keywords") },
    ], false),
    "Images": o([
        { json: "metaName", js: "metaName", typ: "" },
        { json: "type", js: "type", typ: r("Type") },
        { json: "additionalItems", js: "additionalItems", typ: true },
        { json: "items", js: "items", typ: r("EndDate") },
    ], false),
    "Publications": o([
        { json: "metaName", js: "metaName", typ: "" },
        { json: "type", js: "type", typ: r("Type") },
        { json: "description", js: "description", typ: "" },
        { json: "additionalItems", js: "additionalItems", typ: true },
        { json: "items", js: "items", typ: r("PublicationsItems") },
    ], false),
    "PublicationsItems": o([
        { json: "type", js: "type", typ: "" },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "properties", js: "properties", typ: r("CunningProperties") },
    ], false),
    "CunningProperties": o([
        { json: "name", js: "name", typ: r("Phone") },
        { json: "publisher", js: "publisher", typ: r("Phone") },
        { json: "releaseDate", js: "releaseDate", typ: r("Image") },
        { json: "url", js: "url", typ: r("Phone") },
        { json: "summary", js: "summary", typ: r("Phone") },
    ], false),
    "References": o([
        { json: "metaName", js: "metaName", typ: "" },
        { json: "type", js: "type", typ: r("Type") },
        { json: "additionalItems", js: "additionalItems", typ: true },
        { json: "description", js: "description", typ: "" },
        { json: "items", js: "items", typ: r("ReferencesItems") },
    ], false),
    "ReferencesItems": o([
        { json: "type", js: "type", typ: "" },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "properties", js: "properties", typ: r("MagentaProperties") },
    ], false),
    "MagentaProperties": o([
        { json: "image", js: "image", typ: r("Name") },
    ], false),
    "Skills": o([
        { json: "metaName", js: "metaName", typ: "" },
        { json: "type", js: "type", typ: r("Type") },
        { json: "description", js: "description", typ: "" },
        { json: "additionalItems", js: "additionalItems", typ: true },
        { json: "items", js: "items", typ: r("SkillsItems") },
    ], false),
    "SkillsItems": o([
        { json: "type", js: "type", typ: "" },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "properties", js: "properties", typ: r("FriskyProperties") },
    ], false),
    "FriskyProperties": o([
        { json: "name", js: "name", typ: r("SchemaClass") },
        { json: "level", js: "level", typ: r("SchemaClass") },
        { json: "levelNumber", js: "levelNumber", typ: r("LevelNumber") },
        { json: "keywords", js: "keywords", typ: r("Keywords") },
    ], false),
    "Volunteer": o([
        { json: "metaName", js: "metaName", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "type", js: "type", typ: r("Type") },
        { json: "additionalItems", js: "additionalItems", typ: true },
        { json: "items", js: "items", typ: r("VolunteerItems") },
    ], false),
    "VolunteerItems": o([
        { json: "type", js: "type", typ: "" },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "properties", js: "properties", typ: r("MischievousProperties") },
    ], false),
    "MischievousProperties": o([
        { json: "organization", js: "organization", typ: r("Phone") },
        { json: "position", js: "position", typ: r("Phone") },
        { json: "url", js: "url", typ: r("Phone") },
        { json: "startDate", js: "startDate", typ: r("Image") },
        { json: "endDate", js: "endDate", typ: r("Image") },
        { json: "summary", js: "summary", typ: r("Phone") },
    ], false),
    "Work": o([
        { json: "metaName", js: "metaName", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "type", js: "type", typ: r("Type") },
        { json: "additionalItems", js: "additionalItems", typ: true },
        { json: "items", js: "items", typ: r("WorkItems") },
    ], false),
    "WorkItems": o([
        { json: "type", js: "type", typ: "" },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "properties", js: "properties", typ: r("BraggadociousProperties") },
    ], false),
    "BraggadociousProperties": o([
        { json: "name", js: "name", typ: r("SchemaClass") },
        { json: "location", js: "location", typ: r("SchemaClass") },
        { json: "position", js: "position", typ: r("SchemaClass") },
        { json: "url", js: "url", typ: r("SchemaClass") },
        { json: "startDate", js: "startDate", typ: r("Image") },
        { json: "endDate", js: "endDate", typ: r("Image") },
        { json: "summary", js: "summary", typ: r("SchemaClass") },
    ], false),
    "Type": [
        "array",
        "string",
    ],
    "Ref": [
        "#/definitions/icon",
        "#/definitions/iso8601",
    ],
};
