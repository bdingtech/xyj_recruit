import React from 'react';
import './Goal.sass';
import blue from '../../assets/blue.png';
import pink from '../../assets/pink.png';
import orange from '../../assets/orange.png';
import x from '../../assets/x.png';
import q from '../../assets/q.png';
import git from '../../assets/git.png';
import w4 from '../../assets/word/w4.png';
import w1 from '../../assets/word/w1.png';
import w2 from '../../assets/word/w2.png';
import w3 from '../../assets/word/w3.png';
import join from '../../assets/join.png'

export default function Goal({ distanceObj: { afterScrollTop, clientWidth } }) {
  let distance = 0;
  if (clientWidth > 920) {
    distance = ((afterScrollTop - 1700) / 600) * 20.5;
  }
  return (
    <div id="part4">
      <img
        className="mascot"
        style={{ transform: `translate(-35vw,-${distance}rem)` }}
        src={x}
        alt=""
      />
      <img
        className="mascot"
        style={{ transform: `translate(35vw,-${distance}rem)` }}
        src={q}
        alt=""
      />
      <div className="goal-title" />
      <div className="goal-desc">
        <div className="goal-desc-item">校园菌的目的是什么?</div>
        <div className="goal-desc-item">
          看到小程序99.99%的覆盖率，看到同学通过一周CP找到自己心爱的人，
        </div>
        <div className="goal-desc-item">
          看到同学们在校园广场吐槽我们的功能不够完善，看到有人向朋友炫耀科大的信息化。
        </div>
        <div className="goal-desc-item">我们不愿主动追求物质上的奖励，</div>
        <div className="goal-desc-item">
          仅希望用技术服务更多人，用以取悦自己。
        </div>
      </div>
      {/* <div className="goal-more">了解青柚团队的共识 ></div> */}
      <div className="goal-card-set">
        <div
          className="goal-card"
          style={{
            backgroundImage: `url('${blue}') `,
            backgroundColor: '#7EC7FF'
          }}
        >
          <img className="goal-card-text-image" src={w1} alt="技术服务用户" />
          <div className="goal-card-sub-text">用户原则</div>
        </div>
        <div
          className="goal-card"
          style={{
            backgroundImage: `url('${pink}') `,
            backgroundColor: '#FFACB0'
          }}
        >
          <img className="goal-card-text-image" src={w2} alt="热爱驱动使命" />
          <div className="goal-card-sub-text">团队共识</div>
        </div>
        <div
          className="goal-card"
          style={{
            backgroundImage: `url('${orange}')`,
            backgroundColor: '#FFBE54'
          }}
        >
          <img className="goal-card-text-image" src={w3} alt="实践促成进步" />
          <div className="goal-card-sub-text">项目目的</div>
        </div>
      </div>
      <div className="goal-divide-line" />
      <div className="hr__slogan">
        <img  src={join} alt="热爱驱动使命" />
      </div>
      <div className="goal-open-source">
        <div className="hr__contaner">
          <div className="hr__name">
            前端开发工程师
          </div>
          <div className="hr__dec">
            <span>1、熟悉 HTML、CSS、JavaScript、Vue/React；</span>
            <span>2、有小程序开发经验；</span>
            <span>3、有完整的项目开发经验；</span>
            <span>4、死磕到每一个像素点。</span>
            <span className="dec_sub">如果对本职位感兴趣，请发送简历至 bdingtech@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="goal-open-source">
        <div className="hr__contaner">
          <div className="hr__name">
            UI 设计师
          </div>
          <div className="hr__dec">
            <span>1、熟练使用Figma、Sketch、Illustrator、PS等设计软件，了解Web/iOS/Android设计规范；</span>
            <span>2、重视细节，追求像素级完美，注重用户体验；</span>
            <span>3、具有独立思考的能力，有良好的理解、沟通、逻辑、表达能力；</span>
            <span>4、美术设计类相关专业优先；有扎实的美术功底；</span>
            <span>5、能高效理解产品和交互设计思路，敏锐判断视觉设计的可行性。</span>
            <span className="dec_sub">如果对本职位感兴趣，请发送简历到 bdingtech@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}
