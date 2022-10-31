import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { filterConstants, filterItem } from '../../messages';

import Template_Screen_3 from '../templates/Template_3/Template_Screen_3';
import { jobData } from '../../utils/constants';
import MainComponent from '../templates/Template_3/MainComponent';
import SavedJobsPage from './SavedJobsPage';
interface FindJobsProps {
  currentLoc?: string;
}

export default function FindJobsPage(props: FindJobsProps) {
  const [filterJobs, setfilterJobs] = React.useState<jobData[]>([]);
  const [filterData, setFilterData] = useState(filterConstants);
  const [openModal, setOpenModal] = useState(false);
  const handleCloseModal = () => setOpenModal(false);
  const [job, setJob] = useState<jobData>();
  const [prevJobs, setprevJobs] = React.useState<jobData[]>([]);
  const [searchSkill, setsearchSkill] = useState('');
  const [seaechLoc, setseaechLoc] = useState('');
  const [selectedSavedJobs, setselectedSavedJobs] = useState(false);
  const [filteredVales, setFilteredValues] = React.useState<any[]>([]);
  const [data, setdata] = useState<jobData[]>([]);
  const [isSaved, setisSaved] = useState(false);

  const [load, setload] = useState(false);
  const [saveLoad, setSaveLoad] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:9001/jobs/').then((res) => {
      setdata(res.data);
      setfilterJobs(res.data);
      setprevJobs(res.data);
      setload(true);
    });
  }, []);

  const handleClick = () => {
    const distanceArray = [
      ...filterData.distance.filter((d) => d.isChecked == true),
      ...filterData.datePosted.filter((d) => d.isChecked == true),
      ...filterData.experienceLevel.filter((d) => d.isChecked == true),
      ...filterData.jobType.filter((d) => d.isChecked == true),
      ...filterData.transport.filter((d) => d.isChecked == true),
      { id: 25, value: 'Green Commutes', isChecked: true }
    ];

    handleFilteredValues(distanceArray);

    handleCloseModal();
  };

  const handleSaveButton = (id: number | undefined) => {
    setSaveLoad(true);
    axios
      .put('http://localhost:9001/jobs/' + id)
      .then((res) => {
        const data: jobData = filterJobs.filter((j) => j.id == res.data.id)[0];
        data.isSaved = !data.isSaved;
        setisSaved(data.isSaved);
        setJob(data);
        setSaveLoad(false);
      })
      .catch((err) => console.log(err));
  };

  const handleChecked = (
    position: number,
    array: filterItem[],
    arrayName: string
  ) => {
    const newArray = [...array];
    newArray.map((item, index) => {
      if (index === position) {
        item.isChecked = item.isChecked ? false : true;
      }
    });
    if (arrayName === 'distance')
      setFilterData({ ...filterData, distance: newArray });
    if (arrayName === 'datePosted')
      setFilterData({ ...filterData, datePosted: newArray });
    if (arrayName === 'jobType')
      setFilterData({ ...filterData, jobType: newArray });
    if (arrayName === 'experienceLevel')
      setFilterData({ ...filterData, experienceLevel: newArray });
    if (arrayName === 'transport')
      setFilterData({ ...filterData, transport: newArray });
  };

  const handleClear = () => {
    const newDistanceArray = [...filterData.distance];
    const newDatePostedArray = [...filterData.datePosted];
    const newJobTypeArray = [...filterData.jobType];
    const newExperienceLevelArray = [...filterData.experienceLevel];
    const newTransportArray = [...filterData.transport];

    newDistanceArray.forEach((label) => {
      label.isChecked = false;
    });
    newDatePostedArray.forEach((label) => {
      label.isChecked = false;
    });
    newJobTypeArray.forEach((label) => {
      label.isChecked = false;
    });
    newExperienceLevelArray.forEach((label) => {
      label.isChecked = false;
    });
    newTransportArray.forEach((label) => {
      label.isChecked = false;
    });

    setFilterData({
      ...filterData,
      distance: newDistanceArray,
      datePosted: newDatePostedArray,
      jobType: newJobTypeArray,
      experienceLevel: newExperienceLevelArray,
      transport: newTransportArray
    });
  };

  const handleSearch = (searchLoc: string, searchSkill: string) => {
    let searchJobs: jobData[] = [];

    let newData: jobData[] = [];
    const list: jobData[] = [];
    data.map((job) => {
      if (job.isActive) {
        list.push(job);
      } else {
        newData.push(job);
      }
    });
    newData = [...list, ...newData];

    const localData: jobData[] = newData;
    setsearchSkill(searchSkill);
    setseaechLoc(searchLoc);

    if (searchSkill !== '' && searchLoc !== '') {
      searchJobs = localData.filter(
        (job) => job.jobRole === searchSkill && job.city === searchLoc
      );
      setfilterJobs(searchJobs);
    } else if (searchLoc !== '') {
      searchJobs = localData.filter((job) => job.city === searchLoc);
      setfilterJobs(searchJobs);
    } else if (searchSkill !== '') {
      searchJobs = localData.filter((job) => job.jobRole === searchSkill);
      setfilterJobs(searchJobs);
    } else setfilterJobs(newData);

    searchJobs.length == 0 ? setprevJobs(newData) : setprevJobs(searchJobs);
  };

  const handleFilteredValues = (list: any[]) => {
    if (list.length == 0) {
      setfilterJobs(prevJobs);
      setFilteredValues(list);
    } else {
      const distance = [];
      let dataToBeMapped;
      for (let i = 0; i < list.length; i++) {
        if (list[i]['isChecked'] && list[i]['value'].includes('kms')) {
          distance.push(list[i]['value'].split('kms')[0].trim());
        }
      }
      const filteredJobs: jobData[] = [];

      distance.map((dist) => {
        const start = parseInt(dist.split('-')[0].trim());
        const end = parseInt(dist.split('-')[1].trim());

        if (searchSkill == '' && seaechLoc == '') {
          dataToBeMapped = data;
        } else {
          dataToBeMapped = filterJobs;
        }
        dataToBeMapped.map((job) => {
          if (job.distance >= start && job.distance <= end) {
            filteredJobs.push(job);
          }
        });
      });

      setFilteredValues(list);
      filteredJobs.length == 0
        ? setfilterJobs([])
        : setfilterJobs(filteredJobs);
    }
  };

  const clearAllFilters = () => {
    let newPrevJobs: jobData[] = [];
    let newData: jobData[] = [];
    if (prevJobs.length > 1) {
      const list: jobData[] = [];
      prevJobs.map((job) => {
        if (job.isActive) {
          list.push(job);
        } else {
          newPrevJobs.push(job);
        }
      });
      newPrevJobs = [...list, ...newPrevJobs];
    }
    const list: jobData[] = [];
    data.map((job) => {
      if (job.isActive) {
        list.push(job);
      } else {
        newData.push(job);
      }
    });
    newData = [...list, ...newData];

    prevJobs.length == 0 ? setfilterJobs(newData) : setfilterJobs(newPrevJobs);
    setFilteredValues([]);
    handleClear();
  };

  const handleDeleteChip = (id: number) => {
    const list = filteredVales.filter((obj) => obj.id != id);

    handleFilteredValues(list);

    const newDistanceArray = [...filterData.distance];
    const newDatePostedArray = [...filterData.datePosted];
    const newJobTypeArray = [...filterData.jobType];
    const newExperienceLevelArray = [...filterData.experienceLevel];
    const newTransportArray = [...filterData.transport];

    newDistanceArray.forEach((label) => {
      if (label.id == id) {
        label.isChecked = false;
      }
    });
    newDatePostedArray.forEach((label) => {
      if (label.id == id) {
        label.isChecked = false;
      }
    });
    newJobTypeArray.forEach((label) => {
      if (label.id == id) {
        label.isChecked = false;
      }
    });
    newExperienceLevelArray.forEach((label) => {
      if (label.id == id) {
        label.isChecked = false;
      }
    });
    newTransportArray.forEach((label) => {
      if (label.id == id) {
        label.isChecked = false;
      }
    });

    setFilterData({
      ...filterData,
      distance: newDistanceArray,
      datePosted: newDatePostedArray,
      jobType: newJobTypeArray,
      experienceLevel: newExperienceLevelArray,
      transport: newTransportArray
    });
  };
  const handleFilterButton = () => {
    setOpenModal(true);
  };

  const getJob = (id: number) => {
    data.map((d) => {
      d.isActive = false;
    });
    const job = data.filter((job) => job.id == id);
    job[0].isActive = true;
    if (job[0].isSaved == false) {
      setisSaved(false);
    } else {
      setisSaved(true);
    }
    const remainingJobs = data.filter((job) => job.id != id);

    const jobList: jobData[] = [...job, ...remainingJobs];

    setJob(data.filter((job) => job.id == id)[0]);
    setfilterJobs(jobList);
  };

  const handleJobLClick = (id: number) => {
    data.map((d) => {
      d.isActive = false;
    });
    filterJobs.map((d) => {
      d.isActive = false;
    });
    const job = filterJobs.filter((job) => job.id == id);
    job[0].isActive = true;
    if (job[0].isSaved == false) {
      setisSaved(false);
    } else {
      setisSaved(true);
    }
    const remainingJobs = filterJobs.filter((job) => job.id != id);

    const jobList: jobData[] = [...job, ...remainingJobs];

    setJob(filterJobs.filter((job) => job.id == id)[0]);
    setfilterJobs(jobList);
  };

  return (
    <Template_Screen_3
      load={load}
      currentLoc={props.currentLoc}
      setselectedSavedJobs={setselectedSavedJobs}
      mainComponent={
        !selectedSavedJobs ? (
          <MainComponent
            handleJobLClick={handleJobLClick}
            isSaved={isSaved}
            handleSaveButton={handleSaveButton}
            handleDeleteChip={handleDeleteChip}
            clearAllFilters={clearAllFilters}
            handleFilteredValues={handleFilteredValues}
            filterConstants={filterData}
            filteredVales={filteredVales}
            handleCloseModal={handleCloseModal}
            openModal={openModal}
            handleFilterButton={handleFilterButton}
            jobs={filterJobs}
            handleChecked={handleChecked}
            handleSaveFilters={handleClick}
            handleClearFilters={handleClear}
            handleSearch={handleSearch}
            getJob={getJob}
            selectedJob={job}
            saveLoad={saveLoad}
          />
        ) : (
          <SavedJobsPage jobsList={data} />
        )
      }
    />
  );
}
