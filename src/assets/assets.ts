
// Residential
import pcmc from './projects/residential/pcmc.jpg';
import Mukundam from './projects/residential/Mukundam.jpg';
import korum from './projects/residential/korum.jpg';
import juhu from './projects/residential/juhu.jpg';
import JuhiGreensResidential from './projects/residential/Juhi Greens.jpg';
import Jai from './projects/residential/Jai.jpg';

// Commercial
import Site35_KorumMall from './projects/commercial/Site-35_Korum_Mall_T._imresizer-768x512.jpg';
import Site20_PunjabRice from './projects/commercial/Site-20_Punjab_Ricel._imresizer-768x512.jpg';
import Site6_Growels from './projects/commercial/Site-6_Growels.jpeg_imresizer-768x512.jpg';
import Site50_VJTICollege from './projects/commercial/Site-50_VJTI-College._imresizer-768x512.jpg';
import Site47_Sinnar2 from './projects/commercial/Site-47_Sinnar2_imresizer-768x512.jpg';
import Site45_ShreeAsthav from './projects/commercial/Site-45_Shree_Asthav._imresizer-768x512.jpg';

// Maintenance
import JuhiGreensMaintenance from './projects/maintenance/Juhi Greens.jpg';

export const projectImages = {
	residential: {
		pcmc,
		Mukundam,
		korum,
		juhu,
		JuhiGreens: JuhiGreensResidential,
		Jai,
	},
	commercial: {
		Site35_KorumMall,
		Site20_PunjabRice,
		Site6_Growels,
		Site50_VJTICollege,
		Site47_Sinnar2,
		Site45_ShreeAsthav,
	},
	maintenance: {
		JuhiGreens: JuhiGreensMaintenance,
	}
};
