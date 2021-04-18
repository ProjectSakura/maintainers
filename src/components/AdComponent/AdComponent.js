import React from "react";

export default class AdComponent extends React.Component {
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    return (
      <ins
        class="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-1277633863266032"
        data-ad-slot="8931146882"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    );
  }
}
