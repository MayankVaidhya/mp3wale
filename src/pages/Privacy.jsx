import React from "react";
import FrontendLayout from "../Layout/FrontendLayout";
import { TbArrowBigRightLinesFilled } from "react-icons/tb";

const privacy = () => {
  return (
    <FrontendLayout>
      <div className="w-full max-w-7xl mx-auto mt-10 pb-5">
        <div className="px-4 md:px-6">
          <h2 className="bg-zinc-800 px-3 py-1 text-white text-xl">
            Privacy & Policy Page
          </h2>
        </div>
        <div className="px-4 md:px-6 mt-5">
          <div className="bg-slate-200 rounded-sm px-3 py-4">
            <div className="flex gap-4">
              <div className="text-red-700">
                <TbArrowBigRightLinesFilled size={25} />
              </div>
              <h3 className="text-red-700 font-semibold text-lg mb-2">
                Privacy & Policy at MP3Wale.co
              </h3>
            </div>
            <p className="text-base mb-5 text-justify leading-6">
              Welcome to MP3Wale.co – your trusted music companion. Our Privacy
              & Policy page is designed to transparently communicate how we
              collect, use, and safeguard your personal information. By
              accessing and using our platform, you consent to the practices
              outlined herein.
            </p>
            <div className="flex gap-4">
              <div className="text-red-700">
                <TbArrowBigRightLinesFilled size={25} />
              </div>
              <h3 className="text-red-700 font-semibold text-lg mb-2">
                Information We Collect
              </h3>
            </div>
            <p className="text-base mb-5 text-justify leading-6">
              When you visit MP3Wale.co, we may collect certain information to
              enhance your user experience. This includes non-personal data such
              as browser type, device information, and user behavior analytics.
              We may also collect personally identifiable information if you
              choose to create an account, such as your name, email address, and
              preferences.
            </p>
            <div className="flex gap-4">
              <div className="text-red-700">
                <TbArrowBigRightLinesFilled size={25} />
              </div>
              <h3 className="text-red-700 font-semibold text-lg mb-2">
                How We Use Your Information
              </h3>
            </div>
            <p className="text-base mb-5 text-justify leading-6">
              The information we gather is utilized to personalize your
              experience, improve our platform's functionality, and tailor
              content to your preferences. It helps us understand user behavior,
              allowing for the optimization of our services and the delivery of
              relevant content. Rest assured, your personal information is never
              sold, traded, or shared with third parties for marketing purposes
              without your explicit consent.
            </p>
            <div className="flex gap-4">
              <div className="text-red-700">
                <TbArrowBigRightLinesFilled size={25} />
              </div>
              <h3 className="text-red-700 font-semibold text-lg mb-2">
                Cookies and Tracking Technologies
              </h3>
            </div>
            <p className="text-base mb-5 text-justify leading-6">
              MP3Wale.co employs cookies and similar tracking technologies to
              enhance user navigation and provide a more personalized
              experience. These tools help us analyze trends, administer the
              website, and gather demographic information. Users have the option
              to control cookie preferences in their browser settings, although
              certain features may be impacted.
            </p>
            <div className="flex gap-4">
              <div className="text-red-700">
                <TbArrowBigRightLinesFilled size={25} />
              </div>
              <h3 className="text-red-700 font-semibold text-lg mb-2">
                Content Ownership and Copyright
              </h3>
            </div>
            <p className="text-base mb-5 text-justify leading-6">
              While we strive to provide a rich and diverse musical experience,
              it's crucial to note that the songs and images featured on
              MP3Wale.co are not owned by us. We respect the intellectual
              property rights of artists and creators. If you believe your work
              has been used inappropriately, please contact us promptly, and we
              will address the issue.
            </p>
            <div className="flex gap-4">
              <div className="text-red-700">
                <TbArrowBigRightLinesFilled size={25} />
              </div>
              <h3 className="text-red-700 font-semibold text-lg mb-2">
                Third-Party Links
              </h3>
            </div>
            <p className="text-base mb-2 text-justify leading-6">
              MP3Wale.co may contain links to third-party websites for your
              convenience. Please be aware that we are not responsible for the
              privacy practices or content of these external sites. We encourage
              users to review the privacy policies of any linked websites.
            </p>
            <div className="flex gap-4">
              <div className="text-red-700">
                <TbArrowBigRightLinesFilled size={25} />
              </div>
              <h3 className="text-red-700 font-semibold text-lg mb-2">
                Security Measures
              </h3>
            </div>
            <p className="text-base mb-2 text-justify leading-6">
              We take the security of your personal information seriously.
              MP3Wale.co employs industry-standard security measures to protect
              against unauthorized access, disclosure, alteration, or
              destruction of your data. However, no method of online
              transmission or storage is 100% secure, and we cannot guarantee
              absolute security.
            </p>
            <div className="flex gap-4">
              <div className="text-red-700">
                <TbArrowBigRightLinesFilled size={25} />
              </div>
              <h3 className="text-red-700 font-semibold text-lg mb-2">
                Children's Privacy
              </h3>
            </div>
            <p className="text-base mb-2 text-justify leading-6">
              MP3Wale.co is not intended for children under the age of 13. We do
              not knowingly collect personal information from individuals in
              this age group. If you are a parent or guardian and discover that
              your child has provided us with personal information, please
              contact us, and we will promptly delete it.
            </p>
            <div className="flex gap-4">
              <div className="text-red-700">
                <TbArrowBigRightLinesFilled size={25} />
              </div>
              <h3 className="text-red-700 font-semibold text-lg mb-2">
                Changes to Privacy & Policy
              </h3>
            </div>
            <p className="text-base mb-2 text-justify leading-6">
              MP3Wale.co reserves the right to update this Privacy & Policy page
              periodically. Any changes will be communicated through the
              website. By continuing to use our platform, you signify your
              acceptance of these changes.
            </p>
            <p className="text-base mb-2 text-justify leading-6">
              Thank you for choosing MP3Wale.co. If you have any questions or
              concerns about our Privacy & Policy, please contact us at
              [contact@mp3wale.co]. Your privacy is important to us, and we are
              committed to maintaining a secure and enjoyable user experience.
            </p>
          </div>
        </div>
      </div>
    </FrontendLayout>
  );
};

export default privacy;
