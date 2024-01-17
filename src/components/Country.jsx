import React, { useContext } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link, useParams } from "react-router-dom";
import { LiaLongArrowAltLeftSolid } from "react-icons/lia";
import { ThemeContext } from "./ContextTheme";

const apiUrl = "https://restcountries.com/v3.1/name/";

const Country = () => {
  const { name } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [country, setCountry] = useState([]);
  const { darkTheme } = useContext(ThemeContext);

  useEffect(() => {
    const getCountryDetails = async () => {
      setLoading(true);
      try {
        const response = await axios.get(apiUrl + `${name}`);
        const data = await response.data;

        setCountry(data);
        // console.log('Country\'s Data:', data);
      } catch (error) {
        setError("An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    };
    getCountryDetails();
  }, [name]);

  if (loading) {
    return (
      <div
        className={`loadingCon ${
          darkTheme ? "dark" : ""
        } d-flex flex-column justify-content-center align-items-center mt-10`}
      >
        <h1 className={`loading ${darkTheme ? "dark" : ""}`}>Loading...</h1>
      </div>
    );
  }

  if (!country) {
    return (
      <div>
        <Link to="/" className="btn btn">
          <LiaLongArrowAltLeftSolid />
          <h5>Back</h5>
        </Link>
        {error && (
          <div className="errorMessage d-flex flex-column justify-content-center align-items-center">
            <div className="imoji">😕</div>
            <div>
              <h2>No Data Found</h2>
            </div>
            <div>
              <p>
                Sorry pal, we couldn't load the data for the country/countries
                you're looking for. Please try again!!
              </p>
            </div>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className="countryDetails mt-5">
        <Link to="/" className={`btn btn-primary ${darkTheme ? "dark" : ""}`}>
          <LiaLongArrowAltLeftSolid />
          <p className="mt-3">Back</p>
        </Link>
        {country.map((nation) => {
          const {
            name,
            borders,
            subregion,
            tld,
            currencies,
            languages,
            capital,
            population,
            flags,
            region,
          } = nation;

          const getCurrencies = Object.keys(currencies).join(", ");
          const getLanguages = Object.values(languages).join(", ");
          const getNativeNamesLastObjKey = Object.keys(
            nation.name.nativeName
          ).pop();
          const nativeNameCommonValue =
            nation.name.nativeName[getNativeNamesLastObjKey]?.common;

          return (
            <div key={uuidv4()} className="countryDetailsCard">
              <div className="flag">
                <img src={flags.svg} alt="{name.common} flag" />
              </div>
              <div className="countryDetailsText">
                <h3 className={`countryName mt-3 ${darkTheme ? "dark" : ""}`}>
                  {name.common}
                </h3>
                <div className="metaContainer">
                  <div className={`countryMeta ${darkTheme ? "dark" : ""}`}>
                    <p>
                      <b>Native Name:</b> {nativeNameCommonValue}
                    </p>
                    <p>
                      <b>Population:</b> {population}
                    </p>
                    <p>
                      <b>Region:</b> {region}
                    </p>
                    <p>
                      <b>Sub Region:</b> {subregion}
                    </p>
                    <p>
                      <b>Capital:</b> {capital}
                    </p>
                  </div>
                  <div className={`countryMeta1 ${darkTheme ? "dark" : ""}`}>
                    <p>
                      <b>Top Level Domain:</b> {tld}
                    </p>
                    <p>
                      <b>Currencies:</b> {getCurrencies}
                    </p>
                    <p>
                      <b>Languages:</b> {getLanguages}
                    </p>
                  </div>
                </div>
                <div className={`borders ${darkTheme ? "dark" : ""}`}>
                  <p>
                    <b>Border Countries:</b>
                  </p>
                  <Link
                    to={`/country/${name}`}
                    className={`bordersList ${darkTheme ? "dark" : ""}`}
                  >
                    {borders.map((border) => {
                      return (
                        <ul key={border}>
                          <li className={` ${darkTheme ? "dark" : ""}`}>
                            {border}
                          </li>
                        </ul>
                      );
                    })}
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
};

export default Country;
