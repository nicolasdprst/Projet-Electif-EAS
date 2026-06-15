import { useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, Download, BookOpen, Share2, Star } from 'lucide-react';
import '../../course-styles.css';
import LimitesCourse from '../../content/terminale/maths/limites/LimitesCourse';
import SuitesCourse from '../../content/terminale/maths/suites/SuitesCourse';
import ProbabilitesCourse from '../../content/terminale/maths/probabilites/ProbabilitesCourse';
import PrimitivesCourse from '../../content/terminale/maths/primitives/PrimitivesCourse';
import IntegralesCourse from '../../content/terminale/maths/integrales/IntegralesCourse';
import LnCourse from '../../content/terminale/maths/ln/LnCourse';
import MatricesCourse from '../../content/terminale/maths/matrices/MatricesCourse';
import ArithmetiqueCourse from '../../content/terminale/maths/arithmetique/ArithmetiqueCourse';
import ContinuiteCourse from '../../content/terminale/maths/continuite/ContinuiteCourse';
import ConvexiteCourse from '../../content/terminale/maths/convexite/ConvexiteCourse';
import DenombrementCourse from '../../content/terminale/maths/denombrement/DenombrementCourse';
import DerivabiliteCourse from '../../content/terminale/maths/derivabilite/DerivabiliteCourse';
import EquaDiffCourse from '../../content/terminale/maths/equa-diff/EquaDiffCourse';
import ExpCourse from '../../content/terminale/maths/exp/ExpCourse';
import EtudeFonctionsCourse from '../../content/terminale/maths/etude-fonctions/EtudeFonctionsCourse';
import GeometrieCourse from '../../content/terminale/maths/geometrie/GeometrieCourse';
import TrigoCourse from '../../content/terminale/maths/trigo/TrigoCourse';
import EffetDopplerCourse from '../../content/terminale/physics/effet-doppler/EffetDopplerCourse';
import DiffractionCourse from '../../content/terminale/physics/diffraction/DiffractionCourse';
import InterferencesCourse from '../../content/terminale/physics/interferences/InterferencesCourse';
import OptiqueCourse from '../../content/terminale/physics/optique/OptiqueCourse';
import LentillesCourse from '../../content/terminale/physics/lentilles/LentillesCourse';
import LunetteCourse from '../../content/terminale/physics/lunette/LunetteCourse';
import CinematiqueCourse from '../../content/terminale/physics/cinematique/CinematiqueCourse';
import DynamiqueCourse from '../../content/terminale/physics/dynamique/DynamiqueCourse';
import MecaniqueCourse from '../../content/terminale/physics/mecanique/MecaniqueCourse';
import CelestesCourse from '../../content/terminale/physics/celestes/CelestesCourse';
import EnergieCourse from '../../content/terminale/physics/energie/EnergieCourse';
import FluidesCourse from '../../content/terminale/physics/fluides/FluidesCourse';
import ElectrocinetiqueCourse from '../../content/terminale/physics/electrocinetique/ElectrocinetiqueCourse';
import ThermoCourse from '../../content/terminale/physics/thermo/ThermoCourse';
import QuantiqueCourse from '../../content/terminale/physics/quantique/QuantiqueCourse';
import IncertitudesCourse from '../../content/terminale/physics/incertitudes/IncertitudesCourse';
import { MOCK_COURSES } from '../../constants';

// types typescript
declare global {
  interface Window {
    MathJax: any;
  }
}

interface CourseViewerProps {
  onBack: () => void;
  chapterId?: string;
}

export default function CourseViewer({ onBack, chapterId }: CourseViewerProps) {
  // mathjax
  useEffect(() => {
    const timer = setTimeout(() => {
      if (window.MathJax && window.MathJax.typesetPromise) {
        window.MathJax.typesetPromise();
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [chapterId]);

  const renderContent = () => {
    switch(chapterId) {
      case 'limites': return <LimitesCourse />;
      case 'suites': return <SuitesCourse />;
      case 'probabilites': return <ProbabilitesCourse />;
      case 'primitives': return <PrimitivesCourse />;
      case 'integrales': return <IntegralesCourse />;
      case 'ln': return <LnCourse />;
      case 'matrices': return <MatricesCourse />;
      case 'arithmetique': return <ArithmetiqueCourse />;
      case 'continuité': return <ContinuiteCourse />;
      case 'convexité': return <ConvexiteCourse />;
      case 'denombrement': return <DenombrementCourse />;
      case 'dérivabilité': return <DerivabiliteCourse />;
      case 'equa-diff': return <EquaDiffCourse />;
      case 'exp': return <ExpCourse />;
      case 'etude-fonctions': return <EtudeFonctionsCourse />;
      case 'geometrie': return <GeometrieCourse />;
      case 'trigo': return <TrigoCourse />;
      case 'effet-doppler': return <EffetDopplerCourse />;
      case 'diffraction': return <DiffractionCourse />;
      case 'interferences': return <InterferencesCourse />;
      case 'optique': return <OptiqueCourse />;
      case 'lentilles': return <LentillesCourse />;
      case 'lunette': return <LunetteCourse />;
      case 'cinematique': return <CinematiqueCourse />;
      case 'dynamique': return <DynamiqueCourse />;
      case 'mecanique': return <MecaniqueCourse />;
      case 'celestes': return <CelestesCourse />;
      case 'energie': return <EnergieCourse />;
      case 'fluides': return <FluidesCourse />;
      case 'electrocinetique': return <ElectrocinetiqueCourse />;
      case 'thermo': return <ThermoCourse />;
      case 'quantique': return <QuantiqueCourse />;
      case 'incertitudes': return <IncertitudesCourse />;
      default: return <div className="p-8 text-center font-bold text-black/20 uppercase tracking-widest italic">Contenu bientôt disponible...</div>;
    }
  };

  // infos du chapitre
  const currentCourse = MOCK_COURSES.find(course => 
    course.chapters.some(c => c.id === chapterId)
  );
  const currentChapter = currentCourse?.chapters.find(c => c.id === chapterId);
  const displayTitle = currentChapter?.title || 'Cours';
  const subjectTitle = currentCourse?.subject === 'physics' 
    ? 'Physique-Chimie' 
    : 'Mathématiques';

  return (
    <motion.div 
      initial={{ opacity: 0, x: '100%' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '100%' }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      className="fixed inset-0 z-[60] bg-[#fff2beff] overflow-y-auto pb-20"
    >
      <div className="sticky top-0 z-10 bg-[#fff2beff]/80 backdrop-blur-xl px-6 py-4 flex items-center justify-between border-b border-black/5">
        <button onClick={onBack} className="h-12 w-12 flex items-center justify-center rounded-2xl bg-white shadow-sm active:scale-95 transition-all">
          <ChevronLeft size={20} className="text-black" />
        </button>
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-[10px] font-black uppercase tracking-widest text-white shadow-lg shadow-primary/20">
          <BookOpen size={14} /> Cours
        </div>
        <button className="h-12 w-12 flex items-center justify-center rounded-2xl bg-white shadow-sm active:scale-95 transition-all">
          <Share2 size={18} className="text-black" />
        </button>
      </div>

      <div className="px-6 pt-8 course-container">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-2 block">{subjectTitle} • Terminale</span>
          <h1 className="text-3xl font-black text-black uppercase tracking-tighter leading-none mb-4">
            {displayTitle.split(' ').map((word, i) => (
              i === displayTitle.split(' ').length - 1 
                ? <span key={i} className="italic underline decoration-primary decoration-4 underline-offset-4">{word}</span>
                : word + ' '
            ))}
          </h1>
          <div className="flex items-center gap-4">
             <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                  <div key={i} className="h-6 w-6 rounded-full border-2 border-[#fff2beff] bg-primary/20 flex items-center justify-center">
                    <Star size={10} className="text-primary" fill="currentColor" />
                  </div>
                ))}
             </div>
             <span className="text-[9px] font-bold text-black/40 uppercase tracking-widest">Niveau Avancé • 45 min</span>
          </div>
        </motion.div>

        <div className="flex gap-3 mb-8">
          <button className="flex-1 bg-black text-white h-14 rounded-2xl flex items-center justify-center gap-3 text-[10px] font-black uppercase tracking-widest shadow-xl shadow-black/10 active:scale-95 transition-all">
            <Download size={16} /> PDF bientôt
          </button>
          <button className="h-14 w-14 bg-white border border-black/5 rounded-2xl flex items-center justify-center shadow-sm active:scale-95 transition-all">
            <Share2 size={18} />
          </button>
        </div>

        <div className="content-card">
          {renderContent()}

          <div className="flex gap-4 mt-12 pt-8 border-t border-black/5">
             <button className="flex-1 py-5 rounded-2xl bg-primary text-white text-[10px] font-black uppercase tracking-widest shadow-xl shadow-primary/20 active:scale-95 transition-all">
                Pratiquer avec Newton IA
             </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
