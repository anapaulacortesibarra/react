import './Loader.css'
import { Spinner } from 'react-bootstrap'



export function Loader() {
    return (
        <div className="loader">
            <Spinner
                animation="border"
                size="lg"
                color="#d4bcb2;" />
        </div>
    )
}
