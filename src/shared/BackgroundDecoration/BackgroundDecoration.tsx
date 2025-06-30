import "./BackgroundDecoration.css"

export default function BackgroundDecoration() {
    return (
        <div className="background-decoration">
            <svg className="decoration-svg" viewBox="0 0 1200 800">
                <path d="M-100 200 Q200 100 400 200 T800 300" stroke="#50c878" strokeWidth="2" fill="none"
                      opacity="0.3"/>
                <path d="M400 500 Q600 400 800 500 T1200 600" stroke="#50c878" strokeWidth="2" fill="none"
                      opacity="0.3"/>
                <path d="M-50 600 Q150 500 350 600 T750 700" stroke="#50c878" strokeWidth="2" fill="none"
                      opacity="0.3"/>
                <circle cx="150" cy="650" r="8" fill="#50c878" opacity="0.4"/>
                <circle cx="1050" cy="250" r="6" fill="#50c878" opacity="0.4"/>
            </svg>
        </div>
    )
}


