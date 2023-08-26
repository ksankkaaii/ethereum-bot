import { FaDiscord, FaSearch, FaTelegram, FaTwitter } from "react-icons/fa"
import { buyLink, discordLink, mLink, teelgramLink, twitterLink } from "../../utils"
import { Link } from "react-router-dom"

const LeftBar = ({ navState }) => {
	const [navIsOpen] = navState

	return (
		<div className={"max-sm:fixed max-sm:top-0 max-sm:bottom-0 max-sm:h-[100vh] flex w-[250px] sm:w-[200px] xl:w-[250px] bg-subBg flex-col overflow-auto z-20 " + (navIsOpen ? "max-sm:left-0" : "max-sm:left-[-260px]")}>
			<Link to="/" className="text-blueText font-semibold text-lg flex sm:hidden px-6 pt-8 pb-4 gap-2 items-center justify-start">
				<img src="/images/logo.png" alt="Logo" />
				<h1>ASAP BOT</h1>
			</Link>
			<h2 className="text-sm font-semibold text-[#696974] px-5 uppercase pt-8">Main</h2>
			<div className="pt-8 flex items-center">
				<div className="w-[3px] h-8 bg-white rounded-r-full"></div>
				<img src="/images/dividend.png" alt="Dividend" className="ml-4 w-6 h-6 object-contain" />
				<h3 className="pl-5 text-sm font-semibold">Tax- Rewards</h3>
			</div>

			<div className="pt-8 flex items-center">
				<img src="/images/dividend.png" alt="Dividend" className="ml-4 w-6 h-6 object-contain" />
				<h3 className="pl-5 text-sm font-semibold">Treasury Rewards (coming soon) </h3>
			</div>

			<div className="pt-8 flex items-center">
				<img src="/images/dividend.png" alt="Dividend" className="ml-4 w-6 h-6 object-contain" />
				<h3 className="pl-5 text-sm font-semibold">Referral(coming soon)</h3>
			</div>

			<div className="flex sm:hidden gap-2 items-center px-6 pt-10">
				<FaSearch className='text-inactiveColor w-[20px] h-[20px]' />
				<input type="text" placeholder='Search…' className='bg-transparent border-none w-full' />
			</div>
			<div className="flex flex-wrap gap-3 pt-8 px-6">
				<a href={buyLink} target="_blank" rel="noopener noreferrer" className='flex sm:hidden px-4 py-3 rounded-full bg-blueText hover:scale-105'>Buy ASAP</a>
			</div>
			<div className="flex mt-auto items-center justify-center px-5 py-10 gap-1 xl:gap-3 flex-wrap">
				<a href={twitterLink} target="_blank" rel="noopener noreferrer" className="bg-[#13131A] w-8 h-8 xl:w-10 xl:h-10 flex items-center justify-center rounded-full hover:scale-105"><FaTwitter className="w-4 h-4 xl:w-5 xl:h-5" /></a>
				<a href={mLink} target="_blank" rel="noopener noreferrer" className="bg-[#13131A] w-8 h-8 xl:w-10 xl:h-10 flex items-center justify-center rounded-full hover:scale-105"><img className="w-4 h-4 xl:w-5 xl:h-5" src="/images/fa-mmm.svg" alt="M" /></a>
				<a href={discordLink} target="_blank" rel="noopener noreferrer" className="bg-[#13131A] w-8 h-8 xl:w-10 xl:h-10 flex items-center justify-center rounded-full hover:scale-105"><FaDiscord className="w-4 h-4 xl:w-5 xl:h-5" /></a>
				<a href={teelgramLink} target="_blank" rel="noopener noreferrer" className="bg-[#13131A] w-8 h-8 xl:w-10 xl:h-10 flex items-center justify-center rounded-full hover:scale-105"><FaTelegram className="w-4 h-4 xl:w-5 xl:h-5" /></a>
			</div>
		</div>
	)
}
export default LeftBar