import '../../assets/css/home/Home.css'
import AboutComp from '../../components/about/AboutComp'
import AboutMainComp from '../../components/home/AboutMainComp'
import AfterEventComp from '../../components/home/AfterEventComp'
import AssesmentCriteriaComp from '../../components/home/AssessmentCriteriaComp'
import CategoryComp from '../../components/home/CategoryComp'
import CriteriaComp from '../../components/home/CriteriaComp'
import HeroComp from '../../components/home/HeroComp'
import LogoComp from '../../components/home/LogoComp'
import NewsComp from '../../components/home/NewsComp'


const HomePage = () => {
    return(
        <>
        <HeroComp></HeroComp>
        <AboutMainComp></AboutMainComp>
        <CriteriaComp></CriteriaComp>
        <AssesmentCriteriaComp></AssesmentCriteriaComp>
        <CategoryComp></CategoryComp>
        <AfterEventComp></AfterEventComp>
        <LogoComp></LogoComp>
        </>
    )
}

export default HomePage