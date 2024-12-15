import '@/styles/components/button/button.css'

const FramerBtn = ({solidPurpleBtn=false,buttonText=null,borderEnabled=false,isTransparent=false,noBgBtn=false,paddingVal=null,noBorder=false,hoverScale=false, fullWidthFlxColn=false,callFunc=null})=>{

    // solidPurpleBtn = to add a purple background
    // buttonText = text inside button
    // borderEnabled = purple border to the button
    // isTransparent = completely transparent button
    // noBgBtn = little fade white background
    // paddingVal = to give padding as per our choice High, medium, small 
    // noBorder = for no border and outline to button
    // hoverScale = to enable scale on hover
    // fullWidthFlxColn = take full width on flex column
    // callFunc = callfunction on click (to be added)
    // add custom function

    return(
        <button className={`framer-common-btn font-semibold font-ssm ${borderEnabled?"enable-btn-border":""} ${solidPurpleBtn?"solid-purple-btn":""} ${isTransparent?"transparent-enabled-btn":""} ${noBgBtn?"no-solid-bg-btn":""} ${paddingVal==="top"?"padding-top-btn":paddingVal==="medium"?"padding-med-btn":"padding-small-btn"} ${noBorder?"no-border-btn":""} ${hoverScale?"enable-scale-btn":""} ${fullWidthFlxColn?"btn-full-width-flx-col":""}` }>{buttonText}</button>
    )
}

export default FramerBtn;