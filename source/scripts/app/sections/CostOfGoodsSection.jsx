import React from "react";

function CostOfGoodsSection({ data }) {
    const sumReducer = (sum, val) => sum + val;

    const bulkSum = (tier) => tier.goods.map((x) => parseInt(x.bulk_cost)).reduce(sumReducer);
    const singleUnitSum = (tier) => tier.goods.map((x) => parseInt(x.cost_per_unit)).reduce(sumReducer);

    return (
        <section className="content-box">
            <div className="subtitle text-center">Cost of Goods</div>

            {data.goods_tiers &&
                data.goods_tiers.map((tier, i) => (
                    <div key={i} className="mb-10">
                        <div className="labels">
                            <div className="label">
                                <span className="label-text">{tier.tier_title}</span>
                            </div>
                        </div>
                        <table className="table-auto w-full text-sm">
                            <thead>
                                <tr>
                                    <th className="border px-4 py-2 text-left">Name</th>
                                    <th className="border px-4 py-2 text-left">Bulk Amount</th>
                                    <th className="border px-4 py-2 text-left">Bulk Cost</th>
                                    <th className="border px-4 py-2 text-left">Single Unit</th>
                                    <th className="border px-4 py-2 text-left">Unit Cost</th>
                                    <th className="border px-4 py-2 text-left" style={{ width: 500 }}>
                                        Description
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {tier.goods &&
                                    tier.goods.map((good, i) => (
                                        <tr key={i}>
                                            <td className="border px-4 py-2">{`${good.name}`}</td>
                                            <td className="border font-mono px-4 py-2">{`${good.bulk_amount} ${good.units}`}</td>
                                            <td className="border font-mono px-4 py-2">${`${good.bulk_cost} /${good.units}`}</td>
                                            <td className="border font-mono px-4 py-2">{`${good.usage_per_unit} ${good.individual_units}`}</td>
                                            <td className="border font-mono px-4 py-2">
                                                ${`${good.cost_per_unit} /${good.individual_units}`}
                                            </td>
                                            <td className="border px-4 py-2">{`${good.description}`}</td>
                                        </tr>
                                    ))}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td></td>
                                    <td className="px-4 py-2 text-right">Total for bulk</td>
                                    <td className="border font-mono px-4 py-2 bg-gray-200">${bulkSum(tier)}</td>
                                    <td className="px-4 py-2 text-right">Total for a Single Unit</td>
                                    <td className="border font-mono px-4 py-2 bg-gray-200">${singleUnitSum(tier)}</td>
                                    <td></td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                ))}

            <div className="meta mt-16 max-w-3xl mx-auto">
                <div className="tab-content text-lg" dangerouslySetInnerHTML={{ __html: data.introduction }} />
            </div>
        </section>
    );
}

export default CostOfGoodsSection;
