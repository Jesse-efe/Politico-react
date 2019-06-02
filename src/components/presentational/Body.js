import React from 'react';
import SummaryCards from './SummaryCards';
import LinkButtons from './LinkButtons';

const Body = () => (
  <div id="container">
    <section className="summary">
      <SummaryCards iconClasses="far fa-clock fa-4x" title="Quick" descrition="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias placeat quasi porro sint reprehenderit asperiores." />
      <SummaryCards iconClasses="far fa-check-circle fa-4x" title="Transparent" descrition="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias placeat quasi porro sint reprehenderit asperiores." />
      <SummaryCards iconClasses="fas fa-shield-alt fa-4x" title="Secure" descrition="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias placeat quasi porro sint reprehenderit asperiores." />
      <SummaryCards iconClasses="far fa-hand-peace fa-4x" title="Independent" descrition="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias placeat quasi porro sint reprehenderit asperiores." />
    </section>
    <section className="description">
      <div className="description-img">
        <img src="https://etimes.com.ng/wp-content/uploads/2018/03/GIRLS-1.jpg" alt="" />
      </div>
      <div className="description-text">
        <h1>Its About Convenience</h1>
        <h4>
            Join a political party,
            run for a political office,
            vote securely. All from the confort of your home
        </h4>
        <LinkButtons value="Sign up" location="sign-up" />
      </div>
    </section>
  </div>
);

export default Body;
