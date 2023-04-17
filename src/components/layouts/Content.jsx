import React from "react";
import { Home } from "../../pages/Home";
import { ComputeList } from "../../pages/listpage/ComputeList";
import { Routes, Route, Navigate } from "react-router-dom";
import { Compute1 } from "../../pages/content/compute/Compute1";

export const Content = () => {
    return (
        <div className="relative isolate overflow-hidden pt-14 font-linerg">
            <div className="mx-auto max-w-7xl">
                <div className="sm:mb-8 sm:flex sm:justify-center">
                    <Routes>
                        <Route
                            path="/"
                            element={<Navigate replace to="/home" />}
                        />
                        <Route path="/home" element={<Home />} />
                        <Route path="/compute" element={<ComputeList />} />
                        <Route
                            path="/compute/compute1"
                            element={<Compute1 />}
                        />
                    </Routes>
                </div>
            </div>
        </div>
    );
};
