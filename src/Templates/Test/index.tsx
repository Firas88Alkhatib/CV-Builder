import { useEffect } from "react";
import { connect } from "react-redux";
import ApplicationState from "../../Types/ApplicationState";
import "./style.css";

const DefaultTemplate = ({ state }: { state: ApplicationState }) => {
  let test: HTMLDivElement | null;
  const firstName = state.personalDetails.firstName && state.personalDetails.firstName;
  const lastName = state.personalDetails.lastName && state.personalDetails.lastName;
  const jobTitle = state.personalDetails.jobTitle && state.personalDetails.jobTitle;
  const country = state.personalDetails.country && state.personalDetails.country;
  const city = state.personalDetails.city && state.personalDetails.city;
  const address = state.personalDetails.address && state.personalDetails.address;
  const postalCode = state.personalDetails.postalCode && state.personalDetails.postalCode;
  const dateOfBirth = state.personalDetails.dateOfBirth && state.personalDetails.dateOfBirth;
  const phoneNumber = state.personalDetails.phoneNumber && state.personalDetails.phoneNumber;
  const email = state.personalDetails.email && state.personalDetails.email;
  const about = state.personalDetails.about && state.personalDetails.about;
  const monthDiff = (dateFrom: Date, dateTo: Date) => {
    return dateTo.getMonth() - dateFrom.getMonth() + 12 * (dateTo.getFullYear() - dateFrom.getFullYear());
  };
  const getDate = (inputDate: string | Date | null) => {
    if (!inputDate) return null;
    const date = new Date(inputDate);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;

    return `${month}/${year}`;
  };
  const getWords = (monthCount: any) => {
    function getPlural(number: any, word: any) {
      return (number === 1 && word.one) || word.other;
    }

    var months = { one: "month", other: "months" },
      years = { one: "year", other: "years" },
      m = monthCount % 12,
      y = Math.floor(monthCount / 12),
      result = [];

    y && result.push(y + " " + getPlural(y, years));
    m && result.push(m + " " + getPlural(m, months));
    return result.join(" ");
  };
  useEffect(() => {
    // const w: number = test!.offsetWidth;
    // if (test) test.style.height = (w * 1.414 + 2).toString();
    // console.log("the test value is ", w);
  });

  return (
    <div className="template default" ref={(me) => (test = me)}>
      <div className="template-personal-details">
        <div className="template-details-header">
          <h1>{`${firstName} ${lastName}`}</h1>
          <p className="template-job-title">{jobTitle}</p>
        </div>
        <div className="template-details">
          <p className="template-address">{address}</p>
          <p className="template-place">
            {city} <span>{postalCode && `, ${postalCode}`}</span>
          </p>
          <p className="template-country">{country}</p>
          <p className="template-phone-number">{phoneNumber}</p>
          <p className="template-email">{email}</p>
          <div className="template-birth">
            <p>DATE OF BIRTH</p>
            <p className="template-birth-date">{dateOfBirth}</p>
          </div>
        </div>
        <div className="template-skills">
          <h2>Skills</h2>
          {state.skills.map((skill) => (
            <div className="template-skill">
              <p>{skill.name}</p>
              <div className="level-bar">
                <div className="level-bar-inner" style={{ width: `${skill.value! * 25}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="template-history-infos">
        <div className="template-profile">
          <p>
            <h2>Profile</h2>
          </p>
          <pre>{about}</pre>
        </div>
        <div className="template-employment">
          <p>
            <h2>Employment History</h2>
          </p>
          {state.employmentHistory.map((item) => (
            <div className="template-employment-item">
              <p>
                <h4>{`${item.jobTitle} At ${item.employer} - ${item.city}`}</h4>
              </p>
              {(item.startDate || item.endDate) && (
                <p>
                  {item.startDate && (
                    <span className="template-employment-item-startDate">{getDate(item.startDate)}</span>
                  )}
                  <span>-</span>
                  {item.endDate && <span className="template-employment-item-endDate">{getDate(item.endDate)}</span>}
                  {item.startDate && (
                    <span>
                      {" \u2022 "}
                      {getWords(
                        monthDiff(new Date(item.startDate!), item.endDate ? new Date(item.endDate!) : new Date())
                      )}
                    </span>
                  )}
                </p>
              )}
              <pre>{item.description}</pre>
            </div>
          ))}
        </div>
        <div className="template-education">
          <h2>Education</h2>
          {state.educations.map((item) => (
            <div className="template-education-item">
              <p>
                <h4>{`${item.degree} At ${item.school} - ${item.city}`}</h4>
              </p>
              {(item.startDate || item.endDate) && (
                <p>
                  {item.startDate && (
                    <span className="template-employment-item-startDate">{getDate(item.startDate)}</span>
                  )}
                  <span>-</span>
                  {item.endDate && <span className="template-employment-item-endDate">{getDate(item.endDate)}</span>}
                  {item.startDate && (
                    <span>
                      {" \u2022 "}
                      {getWords(
                        monthDiff(new Date(item.startDate!), item.endDate ? new Date(item.endDate!) : new Date())
                      )}
                    </span>
                  )}
                </p>
              )}
              <pre>{item.description}</pre>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return { state };
};

export default connect(mapStateToProps, null, null, { forwardRef: true })(DefaultTemplate);
