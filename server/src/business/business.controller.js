import BusinessService from "./business.service.js";

class BusinessController {
	static async getBusinessList(req, res) {
		const { section_name, floor, status, can_takeout, sort_by } = req.query;

		const result = await BusinessService.getBusinessList(section_name, floor, status, can_takeout, sort_by);

		res.status(200).json({ result });
	}

	static async getBusinessDetails(req, res) {
		const { id } = req.params;

		const [businessDetails, businessMenuList, businessRatingList] = await BusinessService.getBusinessDetails(id);

		res.status(200).json({ result: { businessDetails, businessMenuList, businessRatingList } });
	}
}

export default BusinessController;
