import { motion } from "framer-motion";
import TechnologiesCarousel from "./TechnologiesCarousel";
import TechnologiesHeader from "./TechnologiesHeader";
import TechnologiesIntro from "./TechnologiesIntro";
import useScrollEffects from "../../hooks/useScrollEffects";
import ScrollIndicator from "../ScrollIndicator";
import { backendTechnologies, frontendTechnologies, toolsTechnologies } from "@/data/technologies";

const TechnologiesSection = () => {
  const { sectionRef, opacity, y } = useScrollEffects();

  return (
    <motion.section
      id="technologies"
      ref={sectionRef}
      className="bg-background-secondary min-h-screen pt-24 pb-25 px-4 relative"
    >
      <motion.div
        style={{ opacity, y }}
        className="container max-w-5xl flex flex-col items-center"
      >
        <TechnologiesHeader />
        <div className="flex flex-col justify-center items-center gap-10 w-full">
          <TechnologiesIntro />
          <div>
            <div>
              <div>
                <h3 className="text-xl font-semibold mb-6 text-center">
                  Frontend Technologies
                </h3>
                <TechnologiesCarousel technologies={frontendTechnologies} />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-6 text-center">
                  Backend Technologies
                </h3>
                <TechnologiesCarousel technologies={backendTechnologies} />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-6 text-center">
                  Tools & Infrastructure
                </h3>
                <TechnologiesCarousel technologies={toolsTechnologies} />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <ScrollIndicator nextSectionName="contact" />
    </motion.section>
  );
};

export default TechnologiesSection;