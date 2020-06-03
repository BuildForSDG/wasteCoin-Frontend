import React from "react";
import "./App.css";
import faq_img from "../../images/faq.svg";

const Faq = () => (
  <div className="landing_page">
      <section className="faq-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={faq_img}  alt="faq_img" />
            </div>
            <div className="col-md-6">
                <div className="faq-title text-center pb-3">
                    <h2>FAQ</h2>
                </div>
                <div className="faq" id="accordion">
                    <div className="card">
                        <div className="card-header" id="faqHeading-1">
                            <div className="mb-0">
                                <h5 className="faq-title" data-toggle="collapse" data-target="#faqCollapse-1" data-aria-expanded="true" data-aria-controls="faqCollapse-1">
                                    <span className="badge">1</span>What is Wastecoin?
                                </h5>
                            </div>
                        </div>
                        <div id="faqCollapse-1" className="collapse" aria-labelledby="faqHeading-1" data-parent="#accordion">
                            <div className="card-body">
                                <p>Wastecoin is a waste currency just like Bitcoin that can be mined via this app. 
                                    It is simply the reward for a good waste disposal habit.This reward can be 
                                    exchanged for cash and other incentives.  </p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="faqHeading-2">
                            <div className="mb-0">
                                <h5 className="faq-title" data-toggle="collapse" data-target="#faqCollapse-2" data-aria-expanded="false" data-aria-controls="faqCollapse-2">
                                    <span className="badge">2</span> How can I mine Wastecoin?
                                </h5>
                            </div>
                        </div>
                        <div id="faqCollapse-2" className="collapse" aria-labelledby="faqHeading-2" data-parent="#accordion">
                            <div className="card-body">
                                <p>Download the Wastecoin app or visit our website to create a Wastecoin account Wallet. 
                                    Thus, as a user, you are encouraged to consciously collect non-biodegradable waste 
                                    like PET bottles, cartons etc; preserve them and deliever to 
                                    our agents across the state. On delievery to our agents, they weigh the waste and send the 
                                    equivalent amout of coins to your wallet.  </p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="faqHeading-3">
                            <div className="mb-0">
                                <h5 className="faq-title" data-toggle="collapse" data-target="#faqCollapse-3" data-aria-expanded="false" data-aria-controls="faqCollapse-3">
                                    <span className="badge">3</span>What Kind of Incentives can I get?
                                </h5>
                            </div>
                        </div>
                        <div id="faqCollapse-3" className="collapse" aria-labelledby="faqHeading-3" data-parent="#accordion">
                            <div className="card-body">
                                <p>Incentives are simply a way of rewarding your consistency and discipline to make your 
                                    environment safe, clean and sustainable.
                                    Some of our incentives include cash, recharge cards, data subscription amonsgt others.
                                </p> 
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="faqHeading-4">
                            <div className="mb-0">
                                <h5 className="faq-title" data-toggle="collapse" data-target="#faqCollapse-4" data-aria-expanded="false" data-aria-controls="faqCollapse-4">
                                    <span className="badge">4</span> How is Wastecoin generated?
                                </h5>
                            </div>
                        </div>
                        <div id="faqCollapse-4" className="collapse" aria-labelledby="faqHeading-4" data-parent="#accordion">
                            <div className="card-body">
                                <p>Generation and allocation of WasteCoin is monthly and mined on the forcasted amount of 
                                    waste to be generated in a particular geograhical area of interest. Thus, WasteCoins available to be mined 
                                    are limited and the earlier to start to mine (collect and dispose through the WasteCoin Process) the more 
                                    coin you get and leverage on incentives ranging from cash, recharge cards, data subscription and others.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="faqHeading-5">
                            <div className="mb-0">
                                <h5 className="faq-title" data-toggle="collapse" data-target="#faqCollapse-5" data-aria-expanded="false" data-aria-controls="faqCollapse-5">
                                    <span className="badge">5</span> How do I get paid?
                                </h5>
                            </div>
                        </div>
                        <div id="faqCollapse-5" className="collapse" aria-labelledby="faqHeading-5" data-parent="#accordion">
                            <div className="card-body">
                                <p> When you have accumulated as much Wastecoins as possible and you are ready to get your incentives. 
                                    All you need do is REDEEM your wastecoins in your wallet and you will get your cash or incentive equivalent within 48 hours.
                                    However, it is important to ensure that your account details are correct and tallies with our records to avoid payment issues.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="faqHeading-6">
                            <div className="mb-0">
                                <h5 className="faq-title" data-toggle="collapse" data-target="#faqCollapse-6" data-aria-expanded="false" data-aria-controls="faqCollapse-6">
                                    <span className="badge">6</span> How can I be an Agent?
                                </h5>
                            </div>
                        </div>
                        <div id="faqCollapse-6" className="collapse" aria-labelledby="faqHeading-6" data-parent="#accordion">
                            <div className="card-body">
                                <p>If you are interested in being one of our agents, please reach out to us via the contact us form or write an email to wastecoinng@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="faqHeading-7">
                            <div className="mb-0">
                                <h5 className="faq-title" data-toggle="collapse" data-target="#faqCollapse-7" data-aria-expanded="false" data-aria-controls="faqCollapse-7">
                                    <span className="badge">7</span> How am I sure I would not lose my Wastecoins if I leave them for long or get hacked?
                                </h5>
                            </div>
                        </div>
                        <div id="faqCollapse-7" className="collapse" aria-labelledby="faqHeading-7" data-parent="#accordion">
                            <div className="card-body">
                                <p>Generally, a very tight fraud measures has been put in place to forestall such incidence. So you can leave them for as long as you want just as your bank account.
                                    For instance, as a user, you cannot transfer your coins to anyone except
                                    to REDEEM the wastecoins. And in doing so, the incentives would be paid to the account owner. 
                                    So technically, no one can get access to your account and transfer the coins to another account. 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="faqHeading-8">
                            <div className="mb-0">
                                <h5 className="faq-title" data-toggle="collapse" data-target="#faqCollapse-8" data-aria-expanded="false" data-aria-controls="faqCollapse-8">
                                    <span className="badge">8</span> Why should I be part of the waste Revolution?
                                </h5>
                            </div>
                        </div>
                        <div id="faqCollapse-8" className="collapse" aria-labelledby="faqHeading-8" data-parent="#accordion">
                            <div className="card-body">
                                <ul>
                                    <li>One plastic item produced has a desctructive span of about 1000 years.</li>
                                    <li>At least 260 species of acquatic life is endangered by the influx of plastic into oceans and other water bodies</li>
                                    <li>About 4.2 billion plastic items are used every month in Nigeria as more than fifty percent of non-biodegrabale waste such as PET bottles, cartons, nylons ends up in the ocean and other water bodies.</li>
                                    <li>Twenty percent ends up in our streets, gutters and hidden areas of our environment. The rest are either successfully recovered and recylced or end up at the waste site</li>
                                    <li>Unfortunately, the accumulations of these items over the years in the water bodies are beginning to have negative ecological effect on the ecosystem.</li>
                                    <li>Our environments are dirty, poorly managed, unsafe and unsustainable on the long run</li>
                                    <li>Our world is on a collision course with disaster if we do not take active steps individually, collectively to change our habits of poor waste disposal and management.</li>
                                    <li>Your effort can go a very long way to save our cities, sustain them and the ecosystem at large.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </div>
    </section>
  </div>
);

export default Faq;

