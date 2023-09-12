
export const upperSVGData = [
    { id: 1, label: 'Star Shape'},
    { id: 2, label: 'Blob Shape'},
    { id: 3, label: 'Other Shape'},
    { id: 4, label: 'Yet again Shape'},
    { id: 5, label: 'Yet again a shape'}
];

export function TestUpperSVG({ num, wrapperClasses, svgClasses  }) {
    return (
        <div className={wrapperClasses}>
            {num === 1 && <TestUpper1 svgClasses={svgClasses} />}
            {num === 2 && <TestUpper2 svgClasses={svgClasses} />}
            {num === 3 && <TestUpper3 svgClasses={svgClasses} />}
            {num === 4 && <TestUpper4 svgClasses={svgClasses} />}
            {num === 5 && <TestUpper5 svgClasses={svgClasses} />}
        </div>
    )
}

function TestUpper1({ svgClasses}) {
    return (
        <svg className={svgClasses} viewBox="0 0 480 479" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M287.53 0H191.53V123.619L104.118 36.2077L36.236 104.09L123.719 191.573L0 191.65L0.0602646 287.65L122.361 287.574L35.2849 374.333L103.043 442.339L191.53 354.174V479H287.53V355.381L374.942 442.792L442.824 374.91L355.341 287.427L479.06 287.35L479 191.35L354.87 191.428L442.364 104.252L374.605 36.2459L287.53 123.004V0Z" fill="url(#paint0_linear_4_28)"/>
            <defs>
            <linearGradient id="paint0_linear_4_28" x1="107.5" y1="11" x2="405" y2="458" gradientUnits="userSpaceOnUse">
            <stop stop-color="#444444"/>
            <stop offset="1"/>
            </linearGradient>
            </defs>
        </svg>
    )
}

function TestUpper2({ svgClasses}) {
    return (
        <svg className={svgClasses} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M100 200C155.228 200 200 155.228 200 100C200 155.228 244.772 200 300 200C244.772 200 200 244.772 200 300C200 244.772 155.228 200 100 200ZM100 200C44.7715 200 0 244.772 0 300C0 355.228 44.7715 400 100 400C155.228 400 200 355.228 200 300C200 355.228 244.772 400 300 400C355.228 400 400 355.228 400 300C400 244.772 355.228 200 300 200C355.228 200 400 155.228 400 100C400 44.7715 355.228 0 300 0C244.772 0 200 44.7715 200 100C200 44.7715 155.228 0 100 0C44.7715 0 0 44.7715 0 100C0 155.228 44.7715 200 100 200Z" fill="url(#paint0_linear_4_40)"/>
            <defs>
            <linearGradient id="paint0_linear_4_40" x1="371" y1="400" x2="40" y2="-1.90735e-05" gradientUnits="userSpaceOnUse">
            <stop stop-color="#4D4242"/>
            <stop offset="1"/>
            </linearGradient>
            </defs>
        </svg>
    )
}

function TestUpper3({ svgClasses}) {
    return (
        <svg className={svgClasses} viewBox="0 0 429 450" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M262.011 81.3729L214.616 0L168.159 79.7612L84.0364 41.7676L92.6641 135.541L0.627831 155.471L62.1293 224.302L0 292.566L91.85 313.338L82.3639 407.029L166.831 369.807L212.555 449.99L260.694 369.055L346.867 407.029L337.569 315.194L427.957 296.486L365.859 225.693L428.603 155.471L338.39 135.936L348.529 44.1899L262.011 81.3729Z" fill="url(#paint0_linear_7_27)"/>
            <defs>
            <linearGradient id="paint0_linear_7_27" x1="140.616" y1="58" x2="353.616" y2="506.5" gradientUnits="userSpaceOnUse">
            <stop/>
            <stop offset="1" stop-color="#6A6A6A"/>
            </linearGradient>
            </defs>
        </svg>
    )
}

function TestUpper4({ svgClasses}) {
    return (
        <svg className={svgClasses} viewBox="0 0 318 350" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M201.629 25C182.384 -8.33329 134.272 -8.33338 115.027 25L112.429 29.4991C101.009 49.2792 79.7777 61.3291 56.9401 60.9923L51.7457 60.9156C13.2599 60.3479 -11.4083 101.655 7.34298 135.269L11.5553 142.82C22.3589 162.186 22.1847 185.807 11.0966 205.012L6.77331 212.5C-12.4717 245.833 11.5847 287.5 50.0747 287.5H55.2696C78.1097 287.5 99.1608 299.862 110.288 319.808L112.819 324.345C131.57 357.959 179.677 358.668 199.412 325.623L203.845 318.199C215.215 299.159 235.758 287.5 257.934 287.5H266.581C305.071 287.5 329.127 245.833 309.882 212.5L307.285 208.001C295.865 188.221 296.045 163.809 307.755 144.2L310.419 139.74C330.153 106.694 306.714 64.6767 268.229 64.109L259.583 63.9815C237.409 63.6544 217.04 51.6934 205.952 32.4883L201.629 25Z" fill="url(#paint0_linear_7_35)"/>
            <defs>
            <linearGradient id="paint0_linear_7_35" x1="277.328" y1="277.5" x2="-86.1724" y2="-57.5" gradientUnits="userSpaceOnUse">
            <stop/>
            <stop offset="1" stop-color="#707070"/>
            </linearGradient>
            </defs>
        </svg>
    )
}

function TestUpper5({ svgClasses}) {
    return (
        <svg className={svgClasses} viewBox="0 0 366 376" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M209.043 109.516L183 0L156.957 109.516L70.1453 35.9048L114.818 139.495L0.397217 129.905L98.7218 188L0.397217 246.095L114.818 236.505L70.1453 340.095L156.957 266.484L183 376L209.043 266.484L295.855 340.095L251.183 236.505L365.603 246.095L267.278 188L365.603 129.905L251.183 139.495L295.855 35.9048L209.043 109.516Z" fill="url(#paint0_linear_7_65)"/>
            <defs>
            <linearGradient id="paint0_linear_7_65" x1="366" y1="354.5" x2="39.5" y2="-2.18895e-05" gradientUnits="userSpaceOnUse">
            <stop/>
            <stop offset="1" stop-color="#333333"/>
            </linearGradient>
            </defs> 
        </svg>
    )
}