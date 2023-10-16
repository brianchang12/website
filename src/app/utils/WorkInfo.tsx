import { WorkTileProps } from "../components/WorkTile";
import rivianLogo from "../assets/rivian.svg";
import ubcLogo from "../assets/ubc-logo.svg";
import teslaLogo from "../assets/tesla-motors.svg";

export const RivanInfo: WorkTileProps = {
  logo: rivianLogo,
  location: "Vancouver, British Columbia",
  company: "Rivian Automotive",
  title: "Software Engineer Intern - Mobile Integration",
  tools: ["Python", "Pytest", "Appium", "Postman"],
  accomplishments: [
    "Signed off on 4 major release versions of Rivian's Android and iOS app by performing manual and automated testing on mobile test matrix",
    "Translated 50 plus E2E manual tests to automated Appium tests by contributing 50 plus new test cases to Pytest Appium framework that checked the presence of various UI elements",
    "Completed test coverage of 30 mobile backend API endpoints by spearheading the development of new Pytest framework that queried the backend results in a controlled envionment",
    "Documented the test plans on Confluence and Jira for over 5 different mobile features by estimating cost resources and defining testing requirements",
    "Presented in 3 knowledge shares of Quality Assurance team's findings, results, and development of automation framework",
    "Prepared R1T vehicles for successful testing for over 20 weekend test sessions",
  ],
  dates: ["Jan 2022 - Sept 2022"],
};

export const UBCInfo: WorkTileProps = {
  logo: ubcLogo,
  location: "Vancouver, British Columbia",
  company: "University of British Columbia (UBC) IT Department",
  title: "Network Support Analyst Intern",
  tools: ["Python"],
  accomplishments: [
    "Contributed to the development of UBC IT's network tool by writing a Python script that parsed over 100 physical network devices on UBC's campus",
    "Leveraged Cisco's pyATS framework to extract command outputs of all physical layer network devices",
  ],
  dates: ["Sept 2020 - April 2021"],
};

export const TeslaInfo: WorkTileProps = {
  logo: teslaLogo,
  location: "Palo Alto, California",
  company: "Tesla Motors",
  title: "Software Engineer Intern - Updater Team",
  tools: ["Python", "Bash", "Jenkins", "Docker", "Splunk"],
  accomplishments: [
    "Decreased the testing time of a manual painpoint test by 20 hours by architecting and developing a Python Docker image to execute automatically on Jenkins",
    "Created a Jenkins Job that created vehicle software patch files and uploaded to Artifactory for proprietary use for Tesla's Updater team allowing for delta testing on custom Vehicle builds",
    "Updated Tesla's vehicle Python sideloader tool to expand the capabilities to allow for vehicle software patches to be applied during a Vehicle update",
    "Maintained a Artifact Searcher tool used by Tesla's release team and Tesla's communication architect team to parse and download Tesla vehicle builds after release onto Artifactory. Added features such as range requests to allow for downloading certain sections of a build to reduce potential download times and adapted the internal parser functionality to parse JSON data as part of a migration",
    "Integrated Artifact Searcher tool into main vehicle testing suite to increase reliability of downloading tests and decreasing download times by 30 percent",
    "Scripted over a dozen Splunk queries to evaluate perform CPU usage and memory usage of vehicles across Tesla's fleet to evaluate the performance impact during OTA updates to ensure minimal Infotainment system degradation",
    "Repaired 3 vehicle testers for Updater team use by repairing the twisted cable connection to allow for CAN communication",
    "Organized updater team testing for over 4 weeks and participated in weekend testing meetings, leading to the aggregation of over 100,000 useful data points",
  ],
  dates: ["Sept 2022 - Dec 2022", "May 2023 - Aug 2023"],
};
