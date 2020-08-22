<?php
$packages = [
    [
        "title" => "5 Pack of Product",
        "materials" => [
            [
                "name" => "Material 1",
                "bulk_amount" => 1000,
                "bulk_cost" => 2000,
                "cost_per_unit" => 2000,
                "metric" => "kg",
                "usage_per_unit" => 0.8,
                "description" => "Sunt commodi dicta facere magnam eum in. Omnis voluptatibus adipisci repellendus maiores voluptatem nihil. Ea architecto corrupti. Magni rerum explicabo quo facere architecto et labore aut laudantium. Ea eum explicabo illum est consequatur enim."
            ],
            [
                "name" => "Material 1",
                "bulk_amount" => 1000,
                "bulk_cost" => 2000,
                "cost_per_unit" => 2000,
                "metric" => "kg",
                "usage_per_unit" => 0.8,
                "description" => "Qui maxime esse nisi laborum ex adipisci quibusdam aut. Accusamus ea eveniet est. Natus debitis odio numquam eos qui velit iure repellendus. Voluptatem enim reprehenderit iure soluta facilis vitae. Sequi voluptas mollitia odit quisquam beatae soluta sit voluptatem."
            ],
            [
                "name" => "Material 1",
                "bulk_amount" => 1000,
                "bulk_cost" => 2000,
                "cost_per_unit" => 2000,
                "metric" => "kg",
                "usage_per_unit" => 0.8,
                "description" => "Maxime perspiciatis aliquid. Fugit nulla quod. Dolorem sed autem."
            ],
            [
                "name" => "Material 1",
                "bulk_amount" => 1000,
                "bulk_cost" => 2000,
                "cost_per_unit" => 2000,
                "metric" => "kg",
                "usage_per_unit" => 0.8,
                "description" => "Numquam vel voluptatibus ullam quas velit magnam et non maxime. Ipsum et dolorem est. Architecto expedita reprehenderit velit dolor accusantium excepturi. Vitae corporis aut non est ut porro placeat sint. Et sit libero ullam provident ut repellendus. Quibusdam sed dolores hic illo culpa qui beatae."
            ],
            [
                "name" => "Material 1",
                "bulk_amount" => 1000,
                "bulk_cost" => 2000,
                "cost_per_unit" => 2000,
                "metric" => "kg",
                "usage_per_unit" => 0.8,
                "description" => "Alias consectetur nesciunt rerum. Vel amet possimus consequatur ipsum blanditiis delectus qui. Consequatur voluptatibus omnis quaerat. Voluptatem qui explicabo esse autem."
            ],
        ]
    ],
    [
        "title" => "10 Pack of Product",
        "materials" => [
            [
                "name" => "Material 1",
                "bulk_amount" => 1000,
                "bulk_cost" => 2000,
                "cost_per_unit" => 2000,
                "metric" => "kg",
                "usage_per_unit" => 0.8,
                "description" => "Minus ab nihil ut officia quia facilis natus accusamus. Veritatis delectus autem quia impedit. Est consequuntur impedit sed. Vel ducimus est dolorum dolores. Amet sequi laborum dolor iste exercitationem dolorum."
            ],
            [
                "name" => "Material 1",
                "bulk_amount" => 1000,
                "bulk_cost" => 2000,
                "cost_per_unit" => 2000,
                "metric" => "kg",
                "usage_per_unit" => 0.8,
                "description" => "Facere ipsa similique molestiae non. Sapiente quae nobis. Recusandae facilis vero voluptatem aliquam eum nam dolor et unde. Occaecati exercitationem sapiente et qui deserunt. Cupiditate dolores ducimus sequi id sed sed quod voluptates facere."
            ],
            [
                "name" => "Material 1",
                "bulk_amount" => 1000,
                "bulk_cost" => 2000,
                "cost_per_unit" => 2000,
                "metric" => "kg",
                "usage_per_unit" => 0.8,
                "description" => "Occaecati alias recusandae magni hic porro autem quasi quaerat. Debitis autem quia quia vitae. Ut doloremque neque."
            ],
            [
                "name" => "Material 1",
                "bulk_amount" => 1000,
                "bulk_cost" => 2000,
                "cost_per_unit" => 2000,
                "metric" => "kg",
                "usage_per_unit" => 0.8,
                "description" => "Cum et dolorem rerum quidem fuga amet modi. Minima iure voluptatem voluptatem sunt. Tempora corporis enim facere fugiat dolores."
            ],
            [
                "name" => "Material 1",
                "bulk_amount" => 1000,
                "bulk_cost" => 2000,
                "cost_per_unit" => 2000,
                "metric" => "kg",
                "usage_per_unit" => 0.8,
                "description" => "Recusandae quisquam reprehenderit nihil beatae incidunt quod. Nihil nemo ex quia. Ut omnis magnam tempore ea sint. Ipsam alias nihil error cum laborum."
            ],
        ]
    ],

];
?>


<section>
    <div class="tab-box-title">Cost of Goods</div>
    <?php foreach ($packages as $key => $package) : ?>

        <?php
        $package["sum"]["cpu"] = 0;
        $package["sum"]["bc"] = 0;
        ?>
        <div class="mb-10">
            <div class="labels">
                <div class="label"><span class="label-text"><?php echo $package["title"] ?></span></div>
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
                    <?php foreach ($package["materials"] as $key => $material) : ?>
                        <tr>
                            <td class="border px-4 py-2"><?php echo $material["name"] ?></td>
                            <td class="border px-4 py-2"><?php echo $material["bulk_amount"] . $material["metric"]  ?></td>
                            <td class="border px-4 py-2"><?php echo "$" . $material["bulk_cost"] ?></td>
                            <td class="border px-4 py-2"><?php echo "$" . $material["cost_per_unit"] . " /" . $material["metric"] ?></td>
                            <td class="border px-4 py-2"><?php echo $material["usage_per_unit"] . $material["metric"] ?></td>
                            <td class="border px-4 py-2"><?php echo $material["description"] ?></td>
                        </tr>
                        <?php
                        $package["sum"]["bc"] += $material["bulk_cost"];
                        $package["sum"]["cpu"] += $material["cost_per_unit"];
                        ?>
                    <?php endforeach; ?>
                </tbody>
                <tfoot>
                    <tr>
                        <td></td>
                        <td class="border px-4 py-2">Sum</td>
                        <td class="border px-4 py-2 bg-gray-200"><?php echo "$" . $package["sum"]["bc"] ?></td>
                        <td class="border px-4 py-2 bg-gray-200"><?php echo "$" . $package["sum"]["cpu"] . " /" . $material["metric"]  ?></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tfoot>
            </table>
        </div>
    <?php endforeach; ?>
    <div class="meta py-10 max-w-md">
        <div class="label-text mb-3">Our Code of Transparency</div>
        <p>Ipsum ad consequatur hic fugit sed consequuntur debitis et non. Ut assumenda vero rerum dolor. Distinctio sint et pariatur consequatur. Dolor itaque doloremque ipsam beatae eos cumque.</p>
        <div class="cta mt-5">
            <a href="" class="button">
                Read More
                <i class="button-icon fas fa-arrow-circle-right"></i>
            </a>
        </div>
    </div>
</section>