function TagRibbon({
  bgColor,
  tagText,
  customClasses,
  customClassesBG,
  textClasses,
}) {
  console.log(customClasses);
  return (
    <div
      className={`tagRibbonBG ${
        customClassesBG
          ? customClassesBG
          : "lg:w-[89px] lg:h-[37px] align-middle w-[62.5px] h-[26px]"
      }`}
    >
      <div
        className={`tagRibbon ${
          customClasses
            ? customClasses
            : "lg:w-[88px] align-middle lg:h-[37px] w-[62px] h-[26px]"
        }`}
        style={{
          backgroundColor: bgColor,
        }}
      >
        <h1
          className={`${textClasses} lg:pt-1 text-center lg:mr-1 mr-2 align-middle`}
        >
          {" "}
          {tagText}
        </h1>
      </div>
    </div>
  );
}

export default TagRibbon;
