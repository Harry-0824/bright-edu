import React, { useEffect } from "react";
import ImageTextSection from "../../../components/ImageTextSection/ImageTextSection";
import SectionContainer from "../../../components/SectionContainer/SectionContainer";

function Areas() {
  useEffect(() => {
    import("./Areas.css");
    import("./mba-common.scss");
    import("./Areas.scss");
  }, []);

  return (
    <div className="mba-areas-page">
      <ImageTextSection
        title="UIC 美國商學院"
        subtitle="MBA Program"
        imageUrl="https://imgur.com/f8MWoRF.png"
        imageAlt="MBA Program"
      />
      <SectionContainer>
        <div className="mba-areas-content">
          <div className="mba-areas-title">
            世界級城市中的世界等級教育品質 —— UIC CMBA課程
          </div>
          <div className="mba-areas-desc">
            這項全職、面授且通過AACSB認證的MBA課程，專為希望赴美深造並在一年內完成學位的國際專業人士所設計，助你提升專業競爭力，加速職涯發展。
          </div>
          <div className="mba-areas-why">
            <div className="mba-areas-why-title">為什麼選擇 UIC 商學院？</div>
            <ul className="mba-areas-why-list">
              <li>
                <span className="highlight">最佳價值（Best Value）</span>
                <br />
                UIC 商學院榮獲Wall Street Journal 2025
                評選為伊利諾州最佳價值商學院第1名，以合理的投資換取高品質教育與出色的職涯成果。
              </li>
              <li>
                <span className="highlight">
                  強大人脈資源（Powerful Network）
                </span>
                <br />
                地處芝加哥核心地段，擁有超過52,000名校友的龐大網絡，協助你連結企業、開拓職涯機會。
              </li>
              <li>
                <span className="highlight">
                  頂尖研究型大學（Top-tier Research University）
                </span>
                <br />
                UIC是芝加哥唯一的公立研究型大學，每年擁有近5億美元的研究資助，學術與產業連結緊密，學習資源豐富。
              </li>
            </ul>
          </div>
          <div className="mba-areas-advantage">
            <div className="mba-areas-advantage-title">
              <span className="highlight-gold">UIC CMBA的企業導向優勢</span>
              <br />
              <span className="subtitle">The Corporate MBA Advantages</span>
            </div>
            <ul className="mba-areas-advantage-list">
              <li>
                <span className="highlight">時間效益高</span>
                <br />
                課程僅需一年的全職學習，但內容完整，涵蓋MBA所需的所有核心能力與管理知識。
              </li>
              <li>
                <span className="highlight">
                  團隊式學習（Cohort-based Program）
                </span>
                <br />
                採用小班制學習，同儕間透過案例分析、商業模擬與專案合作，建立緊密的學習社群與實務經驗。
              </li>
              <li>
                <span className="highlight">
                  芝加哥地利優勢（Chicago Location）
                </span>
                <br />
                校園鄰近世界十大經濟影響力城市之一的核心商業區，讓你可直接接觸金融市場（如CBOE芝加哥期權交易所）、跨國企業與創新機會，學習與實戰同步。
              </li>
            </ul>
            <div className="mba-areas-advantage-note">
              這是一個讓你在短時間內完成知識學習、強化實戰、強化實力的MBA學位課程，特別適合想要快速進入全球職場舞台的專業人士！
            </div>
          </div>
          <div className="mba-areas-concentrations">
            <div className="mba-areas-concentrations-title">
              Master of Business Administration Concentrations
            </div>
            <div className="mba-areas-concentration-list">
              <a
                href="/uic-business-school/mba/areas/management"
                className="mba-areas-concentration-card"
              >
                <div className="concentration-title">管理 Management</div>
                <div className="concentration-desc">
                  專業著重於掌握領導個人和組織的知識，了解人力資源管理、策略管理、領導力、管理技能和物流
                </div>
              </a>
              <a
                href="/uic-business-school/mba/areas/finance"
                className="mba-areas-concentration-card"
              >
                <div className="concentration-title">金融 Finance</div>
                <div className="concentration-desc">
                  加強同學對金融市場、資產及風險管理以及金融機構在充滿活力的全球經濟中的運作的理解，並促進金融專業人士的職業發展。利用芝加哥金融界的資源，提供金融市場及資產管理的最新知識。
                </div>
              </a>
              <a
                href="/uic-business-school/mba/areas/analytics"
                className="mba-areas-concentration-card"
              >
                <div className="concentration-title">
                  商業分析 Business Analytics
                </div>
                <div className="concentration-desc">
                  學生掌握如何使用數據和模型進行商業決策，以及如何利用大數據和分析來獲得競爭優勢。商業分析專業的
                  MBA 學生準備滿足商業領域中發展最快的領域之一的需求。
                </div>
              </a>
              <a
                href="/uic-business-school/mba/areas/marketing"
                className="mba-areas-concentration-card"
              >
                <div className="concentration-title">行銷 Marketing</div>
                <div className="concentration-desc">
                  選擇此領域的學生對商業的整個行銷過程（從研究和產品開發到溝通規劃和衡量）有深入的了解
                </div>
              </a>
              <a
                href="/uic-business-school/mba/areas/human-resource"
                className="mba-areas-concentration-card"
              >
                <div className="concentration-title">
                  人資管理 Human Resource Management
                </div>
                <div className="concentration-desc">
                  此專業領域與人力資源管理協會（SHRM）接軌，適合對組織中「人員管理」有興趣的學生。
                </div>
              </a>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}

export default Areas;
