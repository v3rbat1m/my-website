import React, { useState } from "react";
import MyTable from "./common/skills/table";
import MyPagination from "./common/skills/pagination";
import paginate from "../../utils/paginate";
import { getSkills } from "./../../services/fakeSkillsService";
import { getTypes } from "./../../services/fakeTypesService";
import List from "./common/skills/list";
import { simplifyInView } from "../../utils/fadeIn";

const pageSize = 7;




const Skills = () => {
  const [page, setPage] = useState(1);
  const [currentType, setType] = useState(getTypes()[0]);

  const { totalCount, skills } = getPagedData(page, currentType);

  return (
    <div className="skills">
      <h2 className='section-header'>Skills.</h2>
      {simplifyInView(
        <List
          currentType={currentType}
          onTypeChange={setType}
          onPageChange={setPage}
          types={getTypes()}
        />,
        "left",
        "test"
      )}
      {simplifyInView(
        <div>
          <MyTable skills={skills} />
          <MyPagination
            currentPage={page}
            pageSize={pageSize}
            totalCount={totalCount}
            onPageChange={setPage}
          ></MyPagination>
        </div>,
        "right",
        "test"
      )}
    </div>
  );
};

export default Skills;

function getPagedData(currPage, currType) {
  const skills = getSkills();
  const currentPage = currPage;

  let filtered = skills;

  filtered = filtered.filter((item) => item.type === currType.name);
  const totalCount = filtered.length;

  filtered = paginate(filtered, currentPage, pageSize);

  return { totalCount, skills: filtered };
}
