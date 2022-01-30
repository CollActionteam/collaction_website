import React from 'react';

// type Props = {
//   width: string;
//   height: string;
// }

export default function NoBeef() {
  // const {width,height} = props;
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="34px"
      height="34px"
      viewBox="0 0 34 34"
    >
      <path
        d="M33.4024 31.7538c.3905.3906.3905 1.0237 0 1.4142-.3905.3906-1.0237.3906-1.4142 0l1.4142-1.4142ZM.988205 2.16804c-.390522-.39052-.390522-1.02369 0-1.414209.390525-.390525 1.023685-.390525 1.414215 0L.988205 2.16804ZM31.9882 33.168.988205 2.16804 2.40242.753831 33.4024 31.7538l-1.4142 1.4142Z"
        fill="#2EB494"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.00797 9.59421c-.81616.00693-1.5821.12031-2.32495.37123C3.26104 10.4458 2.0467 11.3884.7665 12.77c-.308091.3325-.354.8307-.11187 1.2139.88714 1.404 1.85889 2.359 3.18559 2.9429 1.07254.472 2.31142.6703 3.78705.7524.24144 2.0582.78884 4.0507 1.36865 6.1611.19753.719.39883 1.4517.59307 2.2053-.92716.8275-1.51091 2.0317-1.51091 3.3722 0 2.4954 2.02292 4.5184 4.51842 4.5184h1.6238c1.141 0 2.1827-.4233 2.9772-1.1197.7945.6963 1.8362 1.1195 2.977 1.1195h1.6239c2.4955 0 4.5184-2.0229 4.5184-4.5184 0-.1853-.0111-.3679-.0328-.5474l-3.9382-3.9381c-.1794-.0217-.3621-.0329-.5474-.0329h-1.6239c-1.1409 0-2.1827.4233-2.9771 1.1197-.7945-.6963-1.8362-1.1195-2.9771-1.1195h-1.6238c-.4142 0-.8154.0557-1.1964.1601-.1699-.649-.3395-1.2721-.5037-1.8751l-.0001-.0001c-1.06433-3.9088-1.89894-6.9738-1.06403-10.7658l-2.8243-2.82429ZM9.05711 5.9865 7.01048 3.93986c.15076-1.11445.55657-2.2302 1.18503-3.409879.14628-.274582.41203-.4654392.71895-.5163449.30692-.0509059.62006.0439397.84715.2565949.65449.612888 1.11829 1.163519 1.49719 1.848019.3601.6504.6219 1.38483.921 2.31672.3049.69262.5116 1.02447.67 1.21676.0455.05525.0894.10236.1372.14706.5337-.23953 1.0331-.44045 1.5822-.59084.74-.20268 1.5298-.30361 2.5981-.33587l.0301-.00091.0302.00091c1.0682.03226 1.8581.13315 2.5981.33578.5491.15036 1.0485.35126 1.5822.59078.0478-.04469.0917-.09181.1372-.14706.1583-.19229.3651-.52415.67-1.21678.2991-.93188.5609-1.6663.921-2.31669.3789-.68451.8427-1.235139 1.4972-1.848027.2271-.2126559.5402-.3075014.8471-.2565956.307.0509057.5727.2417626.719.5163446.9028 1.694778 1.3462 3.257628 1.2339 4.874218-.0997 1.43599-.6315 2.81614-1.4972 4.27631 1.3856-.16397 2.6091-.10913 3.7758.28494 1.4219.4803 2.6363 1.423 3.9165 2.8046.3081.3325.354.8306.1119 1.2138-.8872 1.404-1.8589 2.3591-3.1856 2.943-1.0726.472-2.3115.6703-3.7871.7524-.1957 1.6683-.5924 3.2935-1.0445 4.9734l-1.6452-1.6452c.9313-3.677 1.3455-6.8024-.239-10.9929-.1115-.29484-.0775-.62493.0918-.89078.9615-1.51034 1.4282-2.71762 1.5074-3.85814.0531-.7647-.0642-1.55543-.3911-2.44694-.0573.08794-.1106.17682-.1611.26821-.262.47317-.4768 1.05408-.7819 2.00713l-.0155.04846-.0203.04664c-.3439.78814-.6439 1.32681-.9793 1.73405-.3433.41687-.6882.649-.9847.8486l-.0179.01205c-.2909.19592-.6633.22508-.9812.07684-.7555-.35234-1.2592-.5735-1.8076-.72367-.5331-.14598-1.1473-.23453-2.1001-.26474-.9527.03021-1.5668.11879-2.0999.2648-.5484.15021-1.0521.3714-1.8078.72375-.3179.14824-.6902.11909-.9811-.07684l-.0179-.01205c-.2966-.19959-.6414-.43172-.9847-.84859-.3354-.40725-.6354-.94591-.9793-1.73405l-.0203-.04664-.0156-.04846c-.305-.95305-.51982-1.53396-.78177-2.00714-.05059-.09138-.10381-.18026-.16112-.26821-.32689.89151-.44425 1.68225-.39115 2.44695.01644.23671.04957.4763.10035.72087Zm-3.73405 5.8738c.74047-.2502 1.57044-.3244 2.63961-.2216-.33973 1.4158-.47425 2.7451-.46431 4.0287-1.24526-.0834-2.13698-.2563-2.85252-.5712-.6893-.3033-1.27271-.7652-1.85788-1.5379.92372-.9028 1.71814-1.4221 2.5351-1.698ZM29.749 15.0961c-.7155.3149-1.6072.4878-2.8525.5711.01-1.2835-.1246-2.6128-.4643-4.0287 1.0692-.1028 1.8992-.0285 2.6396.2216.817.276 1.6114.7952 2.5351 1.6981-.5851.7727-1.1686 1.2345-1.8579 1.5379Zm-5.5102-1.4007c-.8616-.5613-1.7023-.99-2.6522-1.0063-.9595-.0164-1.8364.3889-2.7756 1.01-.4607.3047-.5871.9251-.2825 1.3857.3046.4607.925.5872 1.3857.2826.8309-.5495 1.2897-.6846 1.6381-.6786.3579.0062.7973.1628 1.5948.6823.4627.3015 1.0822.1707 1.3837-.292.3015-.4628.1707-1.0823-.292-1.3837Zm-6.1959 14.3802c.4477-.709 1.2355-1.1764 2.1316-1.1764h1.6239c1.3909 0 2.5184 1.1276 2.5184 2.5184 0 1.3909-1.1275 2.5184-2.5184 2.5184h-1.6239c-.8961 0-1.6838-.4673-2.1315-1.1763-.1832-.2901-.5024-.4661-.8455-.4661-.3432.0001-.6624.176-.8456.4662-.4477.709-1.2354 1.1764-2.1316 1.1764h-1.6238c-1.3909 0-2.5184-1.1276-2.5184-2.5184 0-1.3909 1.1275-2.5184 2.5184-2.5184h1.6238c.8962 0 1.6839.4673 2.1316 1.1763.1832.2901.5024.4661.8455.4661.3432-.0001.6623-.176.8455-.4662Z"
        fill="#2EB494"
      />
    </svg>
  );
}