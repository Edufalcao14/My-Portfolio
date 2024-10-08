"use client";
import Image from "next/image";
import { IoMdCode } from "react-icons/io";
import { TechBagde } from "@/components/tech-bagde";
import { Link } from "@/components/Link";
import { HiArrowNarrowRight } from "react-icons/hi";
import { ProjectCardType } from "@/types/ProjectsInfo";
import { motion } from "framer-motion";

type ProjectCardProps = {
    project: ProjectCardType
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
    >
        <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
            <div className="w-full h-full">
                {project.thumbPhoto && project.thumbPhoto.url ? (
                    <Image
                        width={480}
                        height={300}
                        src={project.thumbPhoto.url}
                        alt="Thumbnail Project"
                        className="w-full h-[200px] lg:min-h-full object-cover rounded-lg z-1"
                    />
                ) : (
                    <div className="w-full h-[200px] lg:min-h-full bg-gray-200 rounded-lg flex items-center justify-center">
                        <p className="text-gray-500">No Image Available</p>
                    </div>
                )}
            </div>

            <div className="">
                <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50 ">
                    <IoMdCode style={{ width: 30, height: 30, color: 'rgb(52,211,153)' }} />
                    {project.projectName}
                </h3>
                <p className="text-gray-400 my-6">
                    {project.projectDescription}
                </p>
                <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
                    {project.technology.map((tech) => (
                        <TechBagde key={`${project.projectName}-tech-${tech.name}`} name={tech.name} />
                    ))}

                </div>
                <Link href={`/projects/${project.slug}`}>
                    Check Project
                    <HiArrowNarrowRight />
                </Link>
            </div>
        </div>
        </motion.div>
    )
}