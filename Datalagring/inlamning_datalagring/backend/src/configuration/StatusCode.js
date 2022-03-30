// 1xx Fortsatt process

// 2xx Lyckades, begäran mottogs.
const OK = 200
const CREATED = 201
const ACCEPTED = 202

// 3xx Omdirigering, ytterliggare åtgärd måste vidtas för att slutföra.

// 4xx Klientfel, innehåller fel syntax eller kan inte uppfyllas.
const BAD_REQUEST = 400
const UNAUTHORIZED = 401
const FORBIDDEN = 403
const NOT_FOUND = 404
const METHOD_NOT_ALLOWED = 405

// 5xx Servern kunde inte uppfylla en till synes giltig begäran.
const INTERNAL_SERVER_ERROR = 500

export default {
    OK,
    CREATED,
    ACCEPTED,
    UNAUTHORIZED,
    BAD_REQUEST,
    FORBIDDEN,
    NOT_FOUND,
    METHOD_NOT_ALLOWED,
    INTERNAL_SERVER_ERROR
}