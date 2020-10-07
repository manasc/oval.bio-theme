<?php
$pillars = [
    [
        'title' => 'Diagnostics Data',
        'name' => '',
        'description' => 'Totam id occaecati sunt modi fugit ducimus. Suscipit et quo facere consequatur a quis quidem. Adipisci mollitia adipisci expedita. Ullam deserunt dolores est fugit. Facere deserunt veniam optio dolorem distinctio quo dolores et placeat. Labore vitae perferendis veniam corrupti dolorem dolorem dolores asperiores.'
    ],
    [
        'title' => 'Lifestyle',
        'name' => '',
        'description' => 'Explicabo odio rerum possimus aut dolore facilis nulla. Magni aliquam quae perferendis hic quibusdam optio esse reiciendis non. Eum veniam eum recusandae.'
    ],
    [
        'title' => 'Nutrition',
        'name' => '',
        'description' => 'Dolorum veniam et nisi dolor inventore. Sed aut quia consectetur ipsam ad recusandae ut ad voluptas. Dignissimos doloremque est ut corrupti. Odio voluptate nihil quia voluptas laborum sit deleniti non. Id nulla et sit.'
    ],
    [
        'title' => 'Recovery',
        'name' => '',
        'description' => 'Iure eveniet sint perspiciatis sit non ut. Voluptatum consequatur debitis deleniti. Est atque dignissimos corporis omnis.'
    ],
    [
        'title' => 'Therapies',
        'name' => '',
        'description' => 'Ut autem et ipsam quos et nihil vel placeat. Quod ipsum voluptatum est provident distinctio cupiditate ducimus magni. Pariatur itaque dolorem natus eius ut nulla quasi nostrum.'
    ]
];


?>

<div class="flex relative w-screen h-screen">
    <div class="max-w-6xl mx-auto px-5 py-10">

        <div class="mb-10">
            <h1 class="text-4xl mb-10 text-center">Frequently Asked Questions</h1>
        </div>

        <!-- FAQ -->
        <section class="accordion-box">
            <div class="accordion">
                <?php foreach ($pillars as $x => $pillar) : ?>
                    <div class="accordion-item accordion-item-has-icon">
                        <div class="accordion-item-header">
                            <div class="accordion-item-question">
                                <div class="accordion-item-icon">
                                    <i class="fas fa-plus-circle"></i>
                                </div>
                                <?= $pillar['title'] ?>
                            </div>
                        </div>
                        <div class="accordion-item-content">
                            <p class="accordion-item-answer"><?= $pillar['description'] ?></p>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </section>
    </div>
    
</div>