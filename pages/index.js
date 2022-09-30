import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import idxStyles from '../styles/index.module.css'
import animations from '../styles/animations.module.css'
import logo from '../src/images/logo.svg'
import placeholder from '../src/images/imgPlaceholder.svg'
import phoneCenter from '../src/images/phone-center.png'
import phoneRight from '../src/images/phone-right.png'
import phoneLeft from '../src/images/phone-left.png'
import phoneSide from '../src/images/phone-side.png'
import Spline from '@splinetool/react-spline';
import { animateScroll as scroll } from 'react-scroll'
import { scrollToTop } from 'react-scroll/modules/mixins/animate-scroll'
import { InlineWidget } from "react-calendly";
import { useEffect, useRef, useState, useMemo } from 'react'
import React from 'react'


const goToHome = () => {
  scroll.scrollToTop();
}

const useElementOnScreen = (options) => {
  const targetRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (targetRef.current) observer.observe(targetRef.current);

    return () => {
      if (targetRef.current) observer.unobserve(targetRef.current);
    }
  }, [targetRef, options]);

  return [targetRef, isVisible]
}


export default function Home() {//APP---------------------------------------------------------------------------------------------

  const options = useMemo(() => {
    return {
      root: null,
      rootMargin: '0px',
      threshold: 0.35
    }
  }, []);

  const options2 = useMemo(() => {
    return {
      root: null,
      rootMargin: '0px',
      threshold: 0.7
    }
  }, []);

  const options3 = useMemo(() => {
    return {
      root: null,
      rootMargin: '0px',
      threshold: 0.6
    }
  }, []);


  const [targetRef, isVisible] = useElementOnScreen(options);
  const [targetRef1, isVisible1] = useElementOnScreen(options);
  const [targetRef2, isVisible2] = useElementOnScreen(options);
  const [targetRef3, isVisible3] = useElementOnScreen(options);
  const [targetRef4, isVisible4] = useElementOnScreen(options);
  const [targetRef5, isVisible5] = useElementOnScreen(options2);
  const [targetRef6, isVisible6] = useElementOnScreen(options);
  const [targetRef7, isVisible7] = useElementOnScreen(options2);
  const [targetRef8, isVisible8] = useElementOnScreen(options3);
  // const [targetRef9, isVisible9] = useElementOnScreen(options);
  // const [targetRef10, isVisible10] = useElementOnScreen(options);







  return (
    <div className={styles.container}>
      <Head>
        <title>JPG</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.svg" />
        <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
      </Head>

      <main className={styles.main}>



        <div className={idxStyles.headerContainer}>
          <line className={idxStyles.headerLine} />
          <span className={`${animations.hidden} ${isVisible ? animations.show : ''}`}>
            <Image src={logo} onClick={goToHome} alt="JPG Logo" width={200} height={120} ref={targetRef} />
          </span>
          <line className={idxStyles.headerLine} />
        </div>

        {/* <div className={idxStyles.phoneContainer}>
          <Spline scene="https://prod.spline.design/9cnB2x9Y2g6nW3jf/scene.splinecode" />
        </div> */}

        <div className={idxStyles.mainGrid}>
          <div className={idxStyles.grid1}>
            <p>
              We Bring Customers To Our Clients <br />
              Through Social Media Marketing.<br />
              With an Incredible <span className={idxStyles.highlightFont}>ROI</span>
            </p>
          </div>

          <div className={`${idxStyles.grid1} ${animations.hidden} ${isVisible ? animations.show : ''}`} ref={targetRef}>
            <Image src={phoneRight} alt="JPG Logo" width={300} height={600} />
          </div>

        </div>






        {/* STAT STRIP----------------------------------------------------------------------------------------------------------------- */}
        <div className={idxStyles.gridBorder}>
          <div className={idxStyles.mainGrid} ref={targetRef1}>

              <div className={`${idxStyles.gridNumbers} ${animations.hiddenLeftStrip} ${isVisible1 ? animations.animateLeftStrip1 : ''} `}  >
                <p> 4 <br /><span className={idxStyles.highlightFont}>active clients</span> </p>
              </div>

              <div className={`${idxStyles.gridNumbers} ${animations.hiddenLeftStrip} ${isVisible1 ? animations.animateLeftStrip2 : ''} `} >
                <p>$580.00 <br /><span className={idxStyles.highlightFont}>Monthly AD Spend</span> </p>
              </div>

              <div className={`${idxStyles.gridNumbers} ${animations.hiddenLeftStrip} ${isVisible1 ? animations.animateLeftStrip3 : ''} `} >
                <p>4.2 × <br /><span className={idxStyles.highlightFont}>Average ROI</span> </p>
              </div>

          </div>
        </div>
        {/* STAT STRIP----------------------------------------------------------------------------------------------------------------- */}





        {/* HOW WE OPERATE----------------------------------------------------------------------------------------------------------------- */}
        <div className={idxStyles.mainGrid2}>
          <div className={`${idxStyles.grid2} ${animations.hidden} ${isVisible2 ? animations.show : ''} `} ref={targetRef2}>
            <Image src={phoneLeft} alt="JPG Logo" width={300} height={600} />
          </div>
          <div className={`${idxStyles.opGrid} ${animations.hidden} ${isVisible2 ? animations.show : ''} `} ref={targetRef2}>
            <div className={idxStyles.grid2}>
              <h2 className={idxStyles.titleFlexStart} >How We Operate</h2>
              <p>
                We analyse the history of your brand.<br /><br />
                We craft a strategy that is in harmony with your brand vision<br /><br />
                We create & run campaigns that sell your product efficiently.<br /><br />
                We collect & utilize data to continuously optimise & scale your campaigns.<br /><br />
                We always strive to achieve a ROI of 4+ for our clients
              </p>
            </div>
            <div className={idxStyles.grid2}>
              <h2 className={idxStyles.titleFlexStart}>How We Dont Operate</h2>
              <p>
                We do not create the content for campaigns<br /><br />
                We do not offer google ads, email marketing or SEO Optimization<br /><br />
                We do not charge money to onboard you<br /><br />
                We do not offer free trials
              </p>
            </div>
          </div>
        </div>
        {/* HOW WE OPERATE----------------------------------------------------------------------------------------------------------------- */}




        {/* Next Gen Agency------------------------------------------------------------------------------------------------------------- */}
        <div className={idxStyles.mainGrid}>
          <div className={idxStyles.opGrid}>
            <div className={`${idxStyles.grid3} ${animations.hidden} ${isVisible3 ? animations.show : ''} `} ref={targetRef3}>
              <h2 className={idxStyles.titleFlexStart}>Next Gen Agency</h2>
              <p>
                We know how the old-fashioned agency works. Month-long on-boarding processes, high start-up fees,
                poor communication, and finally; the lack of pace.
                <span className={idxStyles.highlightFont}> JPG Agency </span>
                is a new breed of agency. We’ll spend less than an hour on-boarding you,
                and then we skip straight to strategizing and delivering results. You’ll be surprised by our efficiency.
                This is possible because of the Seamless Systems we’ve developed.
                These systems allow for breathtaking results, frequent,
                in-depth & easy-to-understand performance reports, a rapid workflow,
                and prices based on logic instead of guesswork. At JPG Agency everything feels seamless.
                We put our clients first. We’ll handle the boring logistics,
                while you enjoy superior results being generated on a daily basis.
              </p>
            </div>
          </div>
          <div className={`${idxStyles.grid1} ${animations.hidden} ${isVisible3 ? animations.show : ''} `} >
            <Image src={phoneRight} alt="JPG Logo" width={300} height={600} />
          </div>
        </div>
        {/* Next Gen Agency------------------------------------------------------------------------------------------------------------- */}



        {/* How We Serve You------------------------------------------------------------------------------------------------------------ */}
        <h2 className={`${idxStyles.titleFlexStart} ${animations.hidden} ${isVisible4 ? animations.show : ''} `} ref={targetRef4}>
          How we Serve you</h2>
        <div className={idxStyles.mainGrid}>

          <div className={`${idxStyles.grid1} ${animations.hidden} ${isVisible5 ? animations.show : ''} `} ref={targetRef5}>
            <Image src={phoneRight} alt="JPG Logo" width={300} height={600} />
          </div>
          <div className={`${idxStyles.opGrid} ${animations.hiddenBottom} ${animations.hidden} ${isVisible4 ? animations.animateBottom : ''} `}>
            <div className={idxStyles.grid2}>
              <h2 className={`${idxStyles.titleFlexStart}`} >Done for You</h2>
              <p>
                We analyse the history of your brand.<br /><br />
                We craft a strategy that is in harmony with your brand vision<br /><br />
                We create & run campaigns that sell your product efficiently.<br /><br />
                We collect & utilize data to continuously optimise & scale your campaigns.<br /><br />
                We always strive to achieve a ROI of 4+ for our clients
              </p>
            </div>
            <div className={idxStyles.grid2}>
              <h2 className={`${idxStyles.titleFlexStart}`}>Done With You</h2>
              <p>
                We do not create the content for campaigns<br /><br />
                We do not offer google ads, email marketing or SEO Optimization<br /><br />
                We do not charge money to onboard you<br /><br />
                We do not offer free trials
              </p>
            </div>
          </div>

        </div>
        {/* How We Serve You------------------------------------------------------------------------------------------------------------ */}





        <div className={idxStyles.mainGrid}>
          <div className={`${idxStyles.grid2} ${animations.hidden} ${isVisible6 ? animations.show : ''} `} ref={targetRef6}>
            <Image src={phoneSide} alt="JPG Logo" width={1200} height={604} />
          </div>
          <div className={`${idxStyles.opGrid} ${animations.hidden} ${isVisible6 ? animations.show : ''} `} ref={targetRef6}>
            <div className={idxStyles.grid3}>
              <h2 className={idxStyles.titleFlexStart}>Our Vision</h2>
              <p>

                We do care about your brand.
                <span className={idxStyles.highlightFont}> We treat it as if it was our own. </span>
                The recommendations we make to our clients are the recommendations we would
                make if we owned their companies. Without regard to our own interest.
                A great man once said that, and we choose to live by it. No matter which product
                you’re selling, be prepared to provide us with a sample of the product.
                <span className={idxStyles.highlightFont}> We always test our client’s products prior to advertising them. </span>
                This lets us evaluate
                the product quality, and it enables us to immerse ourselves into the perspective
                of your future customers.
              </p>
            </div>
          </div>

        </div>








        {/* STAT STRIP----------------------------------------------------------------------------------------------------------------- */}
        <div className={idxStyles.gridBorder}>
          <div className={`${animations.hidden} ${isVisible7 ? animations.show : ''} `} ref={targetRef7}>
            <h2 className={idxStyles.titleFlexStart}>You’re Always Welcome To Schedule A Free Call With Our Team</h2>

            <p className={idxStyles.grid3}>
              We’ll discuss strategy, tailored solutions, and elaborate on exactly
              how we can help grow your business.
            </p>
          </div>
        </div>
        {/* STAT STRIP----------------------------------------------------------------------------------------------------------------- */}








        {/* calendar ---------------------------------------------------------------------------------------------------------------- */}





        <div className={idxStyles.mainGrid}>
          <div className={`${idxStyles.grid2} ${animations.hidden} ${isVisible8 ? animations.show : ''} `} ref={targetRef8}>
            <div className={idxStyles.calendar}>

              <div className={idxStyles.calendarContainer}>
                <InlineWidget url="https://calendly.com/jpgagency/strategy-meeting?hide_event_type_details=1&hide_gdpr_banner=1&background_color=070d20&text_color=ffffff&primary_color=ffde59" />
              </div>

              <Image className={idxStyles.calendarPhoneContainer} src={phoneCenter} alt="JPG Logo" width={400} height={800} />

            </div>
          </div>

          <div className={idxStyles.opGrid}>
            <div className={`${idxStyles.grid2} ${animations.hiddenRight} ${isVisible8 ? animations.animateLeft : ''} `} >
              <h2 className={idxStyles.titleFlexStart}>Book A Free Strategy Call</h2>
              <p>
                We know how the old-fashioned agency works. Month-long on-boarding processes, high start-up fees, poor communication, and finally; the lack of pace.

                Stage Digital is a new breed of agency. We’ll spend less than an hour on-boarding you, and then we skip straight to strategizing and delivering results. You’ll be surprised by our efficiency. This is possible because of the Seamless Systems we’ve developed. These systems allow for breathtaking results, frequent, in-depth & easy-to-understand performance reports, a rapid workflow, and prices based on logic instead of guesswork. At Stage Digital everything feels seamless. We put our clients first.

                We’ll handle the boring logistics, while you enjoy superior results being generated on a daily basis.
              </p>
              <h2 className={idxStyles.titleFlexStart}>This Strategy Call Is Particularly For:</h2>
              <p>
                Businesses looking to increase their online sales with a breathtaking return on investment.<br /><br />
                Businesses looking to optimise their social media marketing efforts in conjunction with the leading agency in the industry.<br /><br />
                Businesses looking for an agency that can take them from mediocre to superior within the field of eCommerce & Online Sales.<br /><br />
                Businesses looking for an agency that has no higher priority than the clients it serves.<br /><br />
                “We shall always divert our best brains to achieve succes for our existing clients, instead of to the pursuit of new clients”
              </p>
            </div>
          </div>
        </div>



        {/* calendar ---------------------------------------------------------------------------------------------------------------- */}

      </main>



      <footer className={styles.footer}>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image alt="JPG Logo" src="/logo.svg" width={72} height={55} />
          </span>
        </a>
      </footer>
    </div>
  )
}
