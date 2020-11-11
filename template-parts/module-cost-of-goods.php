<section>
    <div class="subtitle text-center">Cost of Goods</div>

    <?php if (!empty($args["fields"]["goods_tiers"])) : ?>
        <?php foreach ($args["fields"]["goods_tiers"] as $key => $tier) : ?>

            <?php
            $tier["sum"]["cpu"] = 0;
            $tier["sum"]["bc"] = 0;
            ?>
            <div class="mb-10">
                <div class="labels">
                    <div class="label"><span class="label-text"><?= $tier["tier_title"] ?></span></div>
                </div>
                <table class="table-auto w-full text-sm">
                    <thead>
                        <tr>
                            <th class="border px-4 py-2">Name</th>
                            <th class="border px-4 py-2">Bulk Amount</th>
                            <th class="border px-4 py-2">Bulk Cost</th>
                            <th class="border px-4 py-2">Cost Per Unit</th>
                            <th class="border px-4 py-2">Usage Per Unit</th>
                            <th class="border px-4 py-2 w-1/2 text-xs">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ($tier["goods"] as $key => $good) : ?>
                            <tr>
                                <td class="border px-4 py-2"><?= $good["name"] ?></td>
                                <td class="border px-4 py-2"><?= $good["bulk_amount"] . $good["units"]  ?></td>
                                <td class="border px-4 py-2"><?= "$" . $good["bulk_cost"] ?></td>
                                <td class="border px-4 py-2"><?= "$" . $good["cost_per_unit"] . " /" . $good["units"] ?></td>
                                <td class="border px-4 py-2"><?= $good["usage_per_unit"] . $good["units"] ?></td>
                                <td class="border px-4 py-2"><?= $good["description"] ?></td>
                            </tr>
                            <?php
                            $tier["sum"]["bc"] += $good["bulk_cost"];
                            $tier["sum"]["cpu"] += $good["cost_per_unit"];
                            ?>
                        <?php endforeach; ?>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td></td>
                            <td class="border px-4 py-2">Sum</td>
                            <td class="border px-4 py-2 bg-gray-200"><?= "$" . $tier["sum"]["bc"] ?></td>
                            <td class="border px-4 py-2 bg-gray-200"><?= "$" . $tier["sum"]["cpu"] . " /" . $good["units"]  ?></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        <?php endforeach; ?>
    <?php endif; ?>

    <?php if (!empty($args["fields"]["introduction"])) : ?>
        <div class="meta mt-16 max-w-3xl mx-auto">
            <div class="tab-content text-lg"><?= $args["fields"]["introduction"] ?></div>
        </div>
    <?php endif; ?>
</section>