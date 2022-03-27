import React from 'react';
import './footer.scss';

export default function Footer({ children, ...restProps }) {
  return <div className='footerContainer' {...restProps}>{children}</div>;
}

Footer.Wrapper = function FooterWrapper({children, ...restProps}) {
  return <div className='footerWrapper' {...restProps}>{children}</div>
}

Footer.Row = function FooterRow({ children, ...restProps }) {
  return <div className='footerRow' {...restProps}>{children}</div>;
};

Footer.Column = function FooterColumn({ children, ...restProps }) {
  return <div className='footerColumn' {...restProps}>{children}</div>;
};

Footer.Link = function FooterLink({ children, ...restProps }) {
  return <div className='footerLink' {...restProps}>{children}</div>;
};

Footer.Title = function FooterTitle({ children, ...restProps }) {
  return <div className='footerTitle' {...restProps}>{children}</div>;
};