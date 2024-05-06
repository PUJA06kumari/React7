import Movies from "./Movies";
function Movie()
{
    let img = <img src="https://occ-0-2483-3647.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbATV66sLF7QUXHU2EAwM1p4_XiPvL1TZ_zsXYO9jj51oICeyleZvvFS8V-N7GcJxaPEFWYdHMKS46B42OK43fhAQ-oRLB6X-Lr-o4rdaj_iINsAq6ZTrVw35zdqKQ6i8iIZoL_1UMpqatzkmtZ1n-fan37XcifoXvbEjeMiAyZawTk-jqzeQER9XuhWKVw.jpg?r=0f5" />, img1 = <img src="https://occ-0-2483-3647.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABa3Jr-QkEGgV9_vDRgTnYfuZ1ZfrXc2GjyhzSW8LgwZA55PTrSzdzuzfHst7mxrEAQ9h7y4tA_JOfq3LQj_92WU7kRXh-c4cioXmEO56lueA3ozibPIpkwNBuBkq-aEy5fRK.jpg?r=975" />  , img2 = <img src="https://occ-0-2483-3647.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABWy79F-RdOl6LQiQXxadd_pHgnmDYNNJMWEj7zOd2EYqzR5HLUE9FcUzsreZhzbNQRe52LxLUbuBh5HbQJOrAQof6snB7HkY86S7cXPhY5i48I_fcye4vPlu9Ruwukhedtxf.jpg?r=03a" /> ,  img3 = <img src="https://occ-0-2483-3647.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRaDaBka1AcVHcR-SxyIS1Sn_RHjE5Cqg6RtabWkYqKOtrS4uFnalyODAuycr5em7BknAabor3sB1MChKBWHHqo_gtSsZMmeicSNES9lyOe0yUdlzrMXg1H2RhEMkmCl0vYYwH0_4QEElaMckHSIf0qMyY4EKchwBT645ZCBdkGYxx81LD6PGOctROfKJeMLYt9OCDoHMNGrFYY7BxV3s9Yex6bOPWcbw7EnRCobz7_VhkDjuhIuSLUPTE2lQMouoyCmJVQSjJs3vC22G_YX715dK_Bx6PJ6vFw5k5TpyZXErGI4XOQISaONLcrJjib6G1Z0JtFiMvmws9qeqS7urrOc9lPzYkqEo5zv7rfPVEDxCKBKtvc.jpg?r=fed" /> , img4 = <img src="https://occ-0-2483-3647.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdNZW17oGhm7GYJellgdQEawKIx9hcjiaBUBdytEbjTvZqGwPDc_CmU2725L-RxIrV-oEMFM4TdLSrwO1DDJNl5H1RwsoDTWWS79erBlFWWe9_x-9qWvQ2-pkZIGKErWOxQ6.jpg?r=4a3" />


    let  title = "Avatar The Last Airbender", title1 = "Secrets of the Neanderthals" , title2 = "The Railway Men - The Untold Story Of Bhopal 1984" , title3 = "Amar Singh Chamkila" , title4 = "Kung Fu Panda: The Dragon Knight"

    return(
        <div className="app">
            <Movies im = {img} ti = {title} />
            <Movies im = {img1} ti = {title1} />
            <Movies im = {img2} ti = {title2} />
            <Movies im = {img3} ti = {title3} />
            <Movies im = {img4} ti = {title4} />
        </div>
    )
}
export default Movie;