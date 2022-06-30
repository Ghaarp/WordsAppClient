import React from "react";
import classes from "./styles/tree.module.css";
import { getClass } from "../../../utils/cssClasses";
import HidableGroup from "./HidableGroup";

const TranslationTreeComponent = ({ data, innerIndex, classNameAdditive }) => {
  return (
    <div
      className={getClass([
        classes.TranslationTreeContainer,
        innerIndex ? classes.borderedContainer : "",
      ])}
    >
      {innerIndex ? (
        <div className={classes.index}>
          <div className={classes.number}> {innerIndex}</div>
        </div>
      ) : null}
      <div
        className={getClass([
          classNameAdditive,
          classes.TranslationTreeComponent,
        ])}
      >
        {data && data.tags ? (
          <div className={classes.tags}>
            {data.tags.map((element) => (
              <TranslationTreeComponent data={element} />
            ))}
          </div>
        ) : null}
        {data && data.tag ? (
          <div className={classes.tag}>{data.tag}</div>
        ) : null}
        {data && data.meaning ? (
          <div className={classes.meaning}>
            <div className={classes.textValue}>{data.meaning}</div>
            {data.expression ? (
              <div className={classes.textExpression}>"{data.expression}"</div>
            ) : null}
          </div>
        ) : null}
        {data && data.value && data.rarity ? (
          <div className={classes.textTranslation}>
            {data.value} - rarity: {data.rarity}
          </div>
        ) : null}

        {data && data.example ? (
          <div>
            <div className={classes.textExpression}>
              "
              <div
                className={classes.textExpression}
                dangerouslySetInnerHTML={{ __html: data.example }}
              />
              "
            </div>
            {data.source ? (
              <div className={classes.textValue}> - {data.source}</div>
            ) : null}{" "}
          </div>
        ) : null}
        {data && data.synonym ? (
          <div className={classes.synonym}>{data.synonym}</div>
        ) : null}

        {data && data.translations ? (
          <div className={classes.translations}>
            {" "}
            <TranslationTreeComponent data={data.translations} />{" "}
          </div>
        ) : null}

        {data && data.synonymGroups ? (
          <HidableGroup groupName="Синонимы">
            <div className={classes.synonymGroups}>
              {data.synonymGroups.map((element) => (
                <TranslationTreeComponent data={element} />
              ))}
            </div>
          </HidableGroup>
        ) : null}

        {data && data.items ? (
          <div className={classes.items}>
            {data.items.map((element, index) => (
              <TranslationTreeComponent data={element} />
            ))}
          </div>
        ) : null}
        {data && data.indexableItems ? (
          data.type ? (
            <HidableGroup groupName={data.type}>
              <div className={classes.items}>
                {data.indexableItems.map((element, index) => (
                  <TranslationTreeComponent
                    data={element}
                    innerIndex={++index}
                  />
                ))}
              </div>
            </HidableGroup>
          ) : (
            <div className={classes.items}>
              {data.indexableItems.map((element, index) => (
                <TranslationTreeComponent data={element} innerIndex={++index} />
              ))}
            </div>
          )
        ) : null}
      </div>
    </div>
  );
};

export default TranslationTreeComponent;
