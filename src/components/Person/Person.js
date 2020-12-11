import React, { useState } from 'react';
import './Person.sass';
import { People } from './People';
import n1 from '../../assets/word/n1.png';
import n2 from '../../assets/word/n2.png';
import t3 from '../../assets/word/t3.png';

export default function Person({
  distanceObj: { afterScrollTop, clientWidth }
}) {
  const [people, randomSort] = useState(People);
  let position = [
    [150, 120, 180, 150, 210, 150],
    [160, 100, 160, 220, 160],
    [170, 170, 230, 170],
    [180, 150, 210, 180, 240, 180]
  ];

  const positionCopy = [
    [150, 120, 180, 150, 210, 150],
    [160, 100, 160, 220, 160],
    [170, 170, 230, 170],
    [180, 150, 210, 180, 240, 180]
  ];

  if (clientWidth <= 920) {
    position = position.map(item => item.fill(0));
  } else if (clientWidth > 920 && afterScrollTop >= 622) {
    const startSetting = clientWidth > 1024 ? 622 : 420;
    position = position.map((item, positionIndex) =>
      item.map((num, innerIndex) =>
        Math.max(
          (1 - (afterScrollTop - startSetting) / 799) *
            positionCopy[positionIndex][innerIndex],
          0
        )
      )
    );
  }

  const handleClick = () => {
    const afterSort = people.sort(() => 0.5 - Math.random());
    randomSort([...afterSort]);
  };

  const setStyle = index => {
    let style = {};
    const setDetail = (row, innerIndex) => ({
      transform: `translateY(${position[row][innerIndex]}px)`
    });

    if (index <= 5) {
      style = setDetail(0, index);
    } else if (index <= 10) {
      style = setDetail(1, index - 6);
    } else if (index <= 14) {
      style = setDetail(2, index - 11);
    } else if (index <= 20) {
      style = setDetail(3, index - 15);
    }

    return style;
  };

  const setClassName = index => {
    let className = '';
    switch (index) {
      case 0:
      case 3:
      case 10:
      case 11:
      case 12:
      case 16:
      case 20:
        className = 'item opacity';
        break;
      case 7:
        className = 'item-main';
        break;
      default:
        className = 'item';
        break;
    }
    return className;
  };

  return (
    <div id="part3">
      <div className="part3-container">
        <div className="left-container">
          <div className="title">
            <img src={t3} alt="" />
          </div>
          <div className="content">
            <p>
              从一开始的几人团队到现在二十多人的工作室，科大校园菌工作室吸引并欢迎越来越多志同道合的朋友们加入。
            </p>
            <p>
              在这里，你可以和大家讨论、交流、学习、进步、共事、策划你喜欢的用户交流活动... 还可以写你感兴趣的项目，让你的代码运行在几万科大人的手机运行。
              <br/>
              在这里，你不仅可以站在一线用户，开发维护科大各种不可思议的用户端产品，还可以为行业赋能，以技术力量创造更美好的生活体验!
            </p>
            <p>成长和进步是一局团战，要和得力的队友一起打！</p>
          </div>
          <div className="people-num">
            <div className="num-item">
              <div className="num">
                <img src={n2} alt="" />
              </div>
              <div className="tag">工作室成员数</div>
            </div>
            <div className="num-item">
              {/* <div className="num">
                <img src={n2} alt="" />
              </div>
              <div className="tag">毕业成员数</div> */}
            </div>
          </div>
          {/* <button className="join">加入青柚</button> */}
        </div>
        <div className="right-container">
          <div className="photo-wall">
            {people.map((person, index) => {
              if (index >= 21) return '';
              const { id, img } = person;
              return (
                <div
                  className={setClassName(index)}
                  key={id}
                  style={setStyle(index)}
                >
                  <img src={img} alt="" />
                </div>
              );
            })}
          </div>
          {/* <div className="random" onClick={handleClick}>
            随机换一拨
          </div> */}
        </div>
      </div>
    </div>
  );
}
