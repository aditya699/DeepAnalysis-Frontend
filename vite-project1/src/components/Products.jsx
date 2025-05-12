import './Products.css';
import { Navbar } from '../navbar/Navbar';

const Products = () => (
  <>
    <Navbar />
    <div className="products-container">
      <h1 className="title">1st Launch: AI Agent Report Builder</h1>
      <p className="description">
        The AI Agent Report Builder lets you effortlessly transform raw data into professional, fully customizable reports—complete with charts, tables, and insights—so you can make faster, data-driven decisions.
        <br />
        Stay tuned: More Amazing Products Coming Soon!
      </p>

      <section id="executive-summary" className="report-section">
        <h2>Executive Summary Which The Agent Will Generate</h2>
        <p>
          This report presents a comprehensive deep analysis of 2 key performance indicators derived from the dataset. Each KPI is analyzed with detailed metrics, visualizations, and business insights to support data-driven decision making.
        </p>
      </section>

      <section id="ai-summary" className="report-section">
        <h2>AI-Generated Summary</h2>
        <p className="ai-summary">
          The data highlights three pivotal insights with significant implications for improving academic outcomes and strengthening the institution’s market position. Firstly, students at school GP consistently exhibit higher average final grades compared to MS, suggesting that GP’s teaching methods or support systems are more effective. This performance gap presents a clear opportunity to analyze and replicate GP’s best practices at MS, potentially through collaborative educator training or curriculum alignment, which could elevate overall institutional performance and reputation. Secondly, a notable gender disparity exists, with male students outperforming female students on average. This trend points to underlying challenges that may disproportionately affect female learners and underscores the need for targeted support programs such as mentorship, tutoring, and engagement initiatives designed to bridge this gap. Addressing this inequity not only promotes fairness but also enhances overall academic results and broadens the appeal to diverse student populations. Lastly, these insights collectively underscore the importance of data-driven strategies to refine academic offerings and student services. By focusing on tailored interventions that address both institutional and demographic performance disparities, the institution can improve student satisfaction, bolster educational outcomes, and strengthen competitive advantage.
        </p>
      </section>

      <section id="analyzed-kpis" className="report-section">
        <h2>Analyzed KPIs</h2>
        <ul className="kpi-list">
          <li>Average Final Grade (G3) by School</li>
          <li>Average Final Grade (G3) by Sex</li>
        </ul>
      </section>

      <section id="quick-navigation" className="report-section">
        <h2>Quick Navigation</h2>
        <div className="nav-buttons">
          <button onClick={() => document.getElementById('kpi-school').scrollIntoView({ behavior: 'smooth' })}>
            By School
          </button>
          <button onClick={() => document.getElementById('kpi-sex').scrollIntoView({ behavior: 'smooth' })}>
            By Sex
          </button>
        </div>
      </section>

      <section id="kpi-school" className="report-section">
        <h2>Average Final Grade (G3) by School</h2>
        <div className="visualization">
          <img
            src="https://test730305913143367.blob.core.windows.net/images-analysis/Average_Final_Grade_%28G3%29_by_School_3bf06696-4292-4233-8fa9-2c35f5f65425.png"
            alt="Average Final Grade (G3) by School"
          />
        </div>
        <div className="analysis-results">
          <table>
            <thead>
              <tr>
                <th>school</th>
                <th>G3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>GP</td>
                <td>10.489971</td>
              </tr>
              <tr>
                <td>MS</td>
                <td>9.847826</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="business-insights">
          <p>
            Students at GP average 10.49 versus 9.85 at MS. This suggests GP’s practices could be studied and adopted at MS—through curriculum reviews or instructor training—to lift overall performance and enhance institutional reputation.
          </p>
        </div>
      </section>

      <section id="kpi-sex" className="report-section">
        <h2>Average Final Grade (G3) by Sex</h2>
        <div className="visualization">
          <img
            src="https://test730305913143367.blob.core.windows.net/images-analysis/Average_Final_Grade_%28G3%29_by_Sex_5cdb8f06-1b00-454f-b0cb-6efd4a768de8.png"
            alt="Average Final Grade (G3) by Sex"
          />
        </div>
        <div className="analysis-results">
          <table>
            <thead>
              <tr>
                <th>sex</th>
                <th>G3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>F</td>
                <td>9.966346</td>
              </tr>
              <tr>
                <td>M</td>
                <td>10.914439</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="business-insights">
          <p>
            Male students average 10.91 versus 9.97 for females. Targeted tutoring, mentorship, and engagement programs for female learners could help close this gap and boost equity and outcomes.
          </p>
        </div>
      </section>
    </div>
  </>
);

export default Products;
