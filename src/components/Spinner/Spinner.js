import './Spinner.scss';


const Spinner = () => {
    return(

        <div className="h-100 d-flex justify-content-center align-items-center">
            <div className="sk-chase">
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
            </div>
        </div>

    )
}

export default Spinner;