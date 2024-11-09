import Editor from "./Editor";
import ErrorBoundary from "./ErrorBoundary";

function ErrorCatch (){
    return (
        <>
        <ErrorBoundary>
            <Editor />
        </ErrorBoundary>
        </>
    )
}

export default ErrorCatch;