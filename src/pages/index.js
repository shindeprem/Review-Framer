import Header from "@/components/header";
import Head from "next/head";
import FramerBtn from "@/components/button";
import FramerFooter from "@/components/footer";

export default function Home() {
  return (
    <>
    <Header/>

    <div className="framer-p ">
      <div className="framer-align-text-center">
        <h1 className="second-head content-comm-b-m">Get testimonials from your customers with ease</h1>
        <p className="third-desc content-comm-b-m font-xl">Collecting testimonials is hard, we get it! So we built Testimonial. In minutes, you can collect text and video testimonials from your customers with no need for a developer or website hosting.</p>
        <FramerBtn buttonText={"Try Free Now"} solidPurpleBtn={true} noBorder={true} hoverScale={true} paddingVal={"medium"}/>
        <p className="font-sm navigate-ln-desc content-comm-t-m">Get started with free credits on us. <a href="/" className="second-head">See our pricing →</a></p>
      </div>
    </div>

    <div className="framer-p">
      <div className="framer-align-text-center">
        <h1 className="second-head content-comm-b-m">Add testimonials to your website with no coding!</h1>
        <p className="third-desc content-comm-b-m font-xl">Copy and paste our HTML code to add the Wall Of Love <a href="/" className="second-head">(full version →)</a> to your website. We support any no-code platform (Webflow, WordPress, you name it!)</p>
      </div>
    </div>


    <div className="framer-p">
      <div className="framer-align-text-center">
        <h1 className="second-head content-comm-b-m">Collect and display testimonials all in one solution</h1>
      </div>
      

      <div className="flx-row-coln-media">
        <div className="first-flx-child">
          <p className="font-lg first-small content-comm-b-m-l font-semibold ">Quick to setup</p>
          <h3 className="second-head content-comm-b-m-l">A dedicated landing page</h3>
          <p className="third-desc content-comm-b-m font-xl">Create a dedicated landing page for your business. Share the page link easily via email, social media, or even SMS. Setup can be done in two minutes.</p>
          <FramerBtn buttonText={"Try if for free"} solidPurpleBtn={true} noBorder={true} paddingVal={"medium"}/>
        </div>
        <div className="second-flx-child">s</div>
      </div>

      <div className="flx-row-coln-media">
        <div className="first-flx-child">
          s
        </div>
        <div className="second-flx-child">
          <p className="font-lg first-small content-comm-b-m-l font-semibold ">Easy to manage</p>
          <h3 className="second-head content-comm-b-m-l">A dashboard to manage all testimonials</h3>
          <p className="third-desc content-comm-b-m font-xl">You will have a simple & clean dashboard to manage all testimonials in one place. It's like your email inbox, but it's designed for your social proof!</p>
          <FramerBtn buttonText={"Try if for free"} solidPurpleBtn={true} noBorder={true} paddingVal={"medium"}/>
        </div>
      </div>

      <div className="flx-row-coln-media">
        <div className="first-flx-child">
          <p className="font-lg first-small content-comm-b-m-l font-semibold ">Track the metrics</p>
          <h3 className="second-head content-comm-b-m-l">Understand how video testimonials are performing</h3>
          <p className="third-desc content-comm-b-m font-xl">Track the metrics from all embedded videos, help your marketing team understand the performance at a glance, even promote the best-performing videos to different marketing channels.</p>

          <span>* Available in the Ultimate plan</span><br/><br/>
          <FramerBtn buttonText={"Try if for free"} solidPurpleBtn={true} noBorder={true} paddingVal={"medium"}/>
        </div>
        <div className="second-flx-child">s</div>
      </div>

      <div className="flx-row-coln-media">
        <div className="first-flx-child">
          s
        </div>
        <div className="second-flx-child">
          <p className="font-lg first-small content-comm-b-m-l font-semibold ">More social proof</p>
          <h3 className="second-head content-comm-b-m-l">Not only text and video testimonials</h3>
          <p className="third-desc content-comm-b-m font-xl">If you have testimonials on social media (e.g. Twitter, LinkedIn, TikTok etc), video hosting platforms (e.g. YouTube, Vimeo), and other review sites (e.g. G2, Google, Capterra, Yelp etc), bring them all to your account. Testimonial helps you manage all your social proof in a single place!</p>
          <FramerBtn buttonText={"Try if for free"} solidPurpleBtn={true} noBorder={true} paddingVal={"medium"}/>
        </div>
      </div>

      <div className="flx-row-coln-media">
        <div className="first-flx-child">
          <p className="font-lg first-small content-comm-b-m-l font-semibold ">Embed the Wall of Love</p>
          <h3 className="second-head content-comm-b-m-l">The best testimonials all in one place</h3>
          <p className="third-desc content-comm-b-m font-xl">Treat the Wall of Love as the place to showcase all your favorite testimonials. You can embed it to your website in under a minute. No coding knowledge required!</p>

          {/* <span><a href="/">See our Wall of Love in action</a></span><br/><br/> */}
          <FramerBtn buttonText={"Try if for free"} solidPurpleBtn={true} noBorder={true} paddingVal={"medium"}/>
        </div>
        <div className="second-flx-child">s</div>
      </div>

      <div className="flx-row-coln-media">
        <div className="first-flx-child">
          s
        </div>
        <div className="second-flx-child">
          <p className="font-lg first-small content-comm-b-m-l font-semibold ">Embed a single video testimonial</p>
          <h3 className="second-head content-comm-b-m-l">Ad-free hosting for each video</h3>
          <p className="third-desc content-comm-b-m font-xl">For the video testimonial, you can embed it directly on your own website like this 👈. You don't need to use any 3rd-party Ad-free hosting service, e.g. Wistia, Vimeo.</p>
          <FramerBtn buttonText={"Try if for free"} solidPurpleBtn={true} noBorder={true} paddingVal={"medium"}/>
        </div>
      </div>
    </div>

    <div className="framer-p">
      <div className="framer-align-text-center">
        <h1 className="second-head content-comm-b-m">Integrate with any platform</h1>
        <p className="third-desc content-comm-b-m font-xl">We built the ultimate tool for showcasing your satisfied customers. With 3-lines of HTML code, you can embed all your testimonials to any platform!</p>
      </div>
    </div>

    <div className="global-light-dark-bg">
      <div className="framer-p bg-transparent">
        <div className="framer-align-text-center-2 bg-transparent">
          <h2 className="second-head content-comm-b-m bg-transparent">Ready to collect testimonials?</h2>
          <p className="third-desc content-comm-b-m font-xl bg-transparent">We are loved by Fortune 500 companies, early-stage startups, marketing agencies, real estate agents, freelancers, and many more. Your customers' testimonials are the best social proof you can get! Get started now 👇</p>
          <FramerBtn  buttonText={"Get started for free"} solidPurpleBtn={true} noBorder={true} hoverScale={true} paddingVal={"medium"}/>
        </div>
      </div>
    </div>

    <FramerFooter/>
    </>
  );
}
