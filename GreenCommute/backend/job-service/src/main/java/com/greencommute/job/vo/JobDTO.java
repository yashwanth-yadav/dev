package com.greencommute.job.vo;

import lombok.*;



@Getter
@Setter
public class JobDTO {

    public int id;
    public boolean isSaved;
    public String jobRole;
    public int distance;
    public boolean isActive;

    public String logo;
    public String company;

    public String location;
    public String city;
    public String state;
    public String pincode;

    public JobDTO(Builder builder) {
        this.id = builder.id;
        this.isSaved = builder.isSaved;
        this.jobRole = builder.jobRole;
        this.distance = builder.distance;
        this.isActive = builder.isActive;
        this.logo = builder.logo;
        this.company = builder.company;
        this.location = builder.location;
        this.city = builder.city;
        this.state = builder.state;
        this.pincode = builder.pincode;
    }



    public static class Builder {

        public int id;
        public boolean isSaved;
        public String jobRole;
        public int distance;
        public boolean isActive;

        public String logo;
        public String company;

        public String location;
        public String city;
        public String state;
        public String pincode;


        public static Builder newInstance()
        {
            return new Builder();
        }

        private Builder() {}

        // Setter methods
        public Builder setId(int id)
        {
            this.id = id;
            return this;
        }

        public Builder setSaved(boolean saved) {
            isSaved = saved;
            return this;

        }

        public Builder setJobRole(String jobRole) {
            this.jobRole = jobRole;
            return this;

        }

        public Builder setDistance(int distance) {
            this.distance = distance;
            return this;

        }

        public Builder setActive(boolean active) {
            isActive = active;
            return this;

        }

        public Builder setLogo(String logo) {
            this.logo = logo;
            return this;

        }

        public Builder setCompany(String company) {
            this.company = company;
            return this;

        }

        public Builder setLocation(String location) {
            this.location = location;
            return this;

        }

        public Builder setCity(String city) {
            this.city = city;
            return this;

        }

        public Builder setState(String state) {
            this.state = state;
            return this;

        }

        public Builder setPincode(String pincode) {
            this.pincode = pincode;
            return this;

        }

        public JobDTO build()
        {
            return new JobDTO(this);
        }
    }



}
