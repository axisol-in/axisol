import React from "react";
import Title from "../components/ui/Title";

interface TandCProps {
    title: string
}

const TandC: React.FC<TandCProps> = ({ title }) => {
    return (
        <div className="w-full h-full bg-[#fcfbf8] dark:bg-secondary text-sencondary dark:text-white" id="terms">
            <Title content={title} />
            <div className="px-8 sm:px-16 lg:px-32">
                <p>Axisol – Term of Use</p><br />
                <p>All Axisol products are owned and operated by Axisolar Infrasturture LLP (“Axisol” is the brand name) and will be referred to as “we”, “our” and “us” in this Terms of Use Policy. By using Axisol products which includes website www.axisol.in you agree to the Internet Privacy Policy of website (“the Website”), and privacy policy of all Axisol products.</p><br />
                <p>Access to and use of Axisol products including the information, materials, products and services available through the Website are subject to these Terms of Use. Please read the Terms of Use and disclaimers carefully before using Axisol products.</p><br />
                <p>The Axisol products Term of Use may be updated from time to time. Updated versions will be posted in all Axisol products including the Website and will be effective immediately. When using the Axisol products you should regularly verify whether the Axisol products Term of Use have been updated or amended.</p><br />
                <p>Using Axisol products</p><br />
                <p>When using any of the Axisol products you agree to be legally bound by these Terms of Use as they may be modified and posted on our products from time to time.</p><br />
                <p>Without prejudice to the above, by using or accessing Axisol products, you agree to be legally bound by these terms and conditions of use as they apply to your use of or access to the Axisol products.</p><br />
                <p>If you do not wish to be bound by these terms and conditions then you may not use any of our Axisol products.</p><br />
                <p>You may download content for non-commercial, private, personal use only, provided copyright, trademark or other proprietary notices remain unchanged and visible. No right, title or interest in any downloaded materials is transferred to you as a result of any such downloading or copying. You agree that you will not otherwise copy, modify, alter, display, distribute, sell, broadcast or transmit any material provided by any of Axisol products in any manner without the written permission of Axisol.</p><br />
                <p>You must ensure that the personal information you provide is accurate and complete and that all ordering or registration details (where applicable) contain your correct name, address and other requested details. For more information about how we deal with your personal information, please read our Privacy Policy using the link provided for our products.</p><br />
                <p>Privacy statement and Policies</p><br />
                <p>We are committed to safeguarding the privacy of our users. We take your privacy very seriously and it is important to us that you can use and enjoy our products without having to compromise your privacy in any way.</p><br />
                <p>All personal data provided to Axisol while using our products will be handled in accordance with the Axisol Privacy Policy. All information provided to Axisol during the use of Axisol products must be correct, complete, and up to date. If we have reason to believe that incorrect, incomplete or outdated information has been provided, access to any of Axisol products may be limited or blocked.</p><br />
                <p>Intellectual Property Rights</p><br />
                <p>The Axisol products and materials made available on all the Axisol products are protected by intellectual property rights, including copyrights, trade names, trademarks, service marks and logos, which are owned by Axisol or used by Axisol under a license or with permission from the owner of such rights. Materials protected by such intellectual property rights also include the design, layout, look, appearance, graphics, photos, images, articles, stories and other materials available on the Axisol products.</p><br />
                <p>However, you may not modify, copy, reproduce, republish, upload, post, transmit or distribute, by any means or in any manner, any material or information on or downloaded from any of our Axisol products including, but not limited to text, graphics, video, messages, code and/or software without our prior written consent, except where expressly invited to do so.</p><br />
                <p>Linked Sites</p><br />
                <p>We make no representations whatsoever about any other websites which you may access through our Axisol products or which may link to our products. When you access any other website you understand that it is independent from us and that we have no control over the content or availability of that website. In addition, a link to any other website does not mean that we endorse or accept any responsibility for the content, or the use of, such a website and shall not be liable for any loss or damage caused or alleged to be caused by or in connection with use of or reliance on any content, goods or services available on or through any other website or resource.</p><br />
                <p>Limitation of Liability, Disclaimer of Warranties and Indemnificatione</p><br />
                <p>To the extent permitted by applicable law, neither Axisol nor its affiliates shall be liable for any direct, indirect, consequential or other damages whatsoever, including but not limited to property damage, loss of use, loss of business, economic loss, loss of data or loss of profits, arising out of or in connection with your use or access to, or inability to use or access any of the Axisol products or its content.</p><br />
                <p>Unless explicitly stated, any new features including new content and/or the release of new software tools or resources shall be subject to these Terms of Use.</p><br />
                <p>Axisol will use reasonable efforts to ensure that the information and materials provided on any of the Axisol products are correct. However, Axisol cannot guarantee the accuracy of all information and materials and does not assume any responsibility or liability for the accuracy, completeness or authenticity of any information and materials provided by Axisol products. We do not warrant that the operation of any of the Axisol product will be uninterrupted or error-free, or that the Axisol products are free from viruses or other components that may be harmful to equipment or software. Axisol does not guarantee that the Axisol products will be compatible with the equipment and software which you may use and does not guarantee that Axisol products will be available all the time or at any specific time.</p><br />
                <p>You must not attempt to interfere with the proper working of any of our Axisol products and, in particular, you must not attempt to circumvent security, tamper with, hack into, or otherwise disrupt any computer system, server, website, router or any other internet connected device.</p><br />
                <p>We reserve the right to alter, suspend or discontinue any aspect of our Axisol products or the content or services available through it, including your access to it.</p><br />
                <p>You agree to indemnify, defend and hold Axisol and its affiliates harmless from any liability or loss, related to either your violation of these Axisol products Term of Use including use of the Website.</p><br />
                <p>Restricting or blocking access to the website for violations of the Website Terms of Use</p><br />
                <p>In case of a violation of the Website Terms of Use, particularly in case of use of the Website or individual elements of the Website for other than its intended use, access to the Website may be restricted or blocked.</p><br />
                <p>Axisol generally reserves the right to partially or entirely alter, block, or discontinue Axisol products or its content at any time and for any reason.</p><br />
                <p>Serverability Clause</p><br />
                <p>Should one of the provisions of these Website Terms of Use be deemed invalid, void, or for any reason unenforceable by a court, that part will be deemed severable and will not affect the validity and enforceability of the remaining terms.</p><br />
                <p>Choice of Law, Jurisdiction and Venue</p><br />
                <p>The use of Axisol products and Axisol products Term of Use are governed by the laws of India. The courts of Mumbai alone shall have exclusive jurisdiction and venue for any disputes arising from or in connection with the use of Axisol products or its Term of Use.</p><br />
                <p>Contact Us</p><br />
                <p>If you have any questions about this Privacy Policy, please contact us using the contact information specified on www.Axisol.in</p><br />
            </div>
        </div>
    )
}

export default TandC;