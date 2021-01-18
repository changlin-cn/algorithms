import { commonSubStr, LCS } from '../src/index';

[commonSubStr].forEach((fn) => {
  test(fn.name, () => {
    console.time(fn.name);
    const res = fn(
      `Nobis qui accusantium quidem quia consequatur harum. Nesciunt ex ullam officia minima cupiditate recusandae possimus nihil. Quasi earum at aperiam iusto tempore eum.
   Veritatis unde odit et officia aliquam. Aperiam doloremque deserunt unde ea. Doloribus eos quas ipsam dignissimos dolores modi aut nemo. Illo sunt et assumenda ratione. Ducimus magni ut sunt assumenda iure qui dignissimos. Omnis est nam voluptatum consectetur consequatur maxime.
   Commodi iste sunt id. Officiis placeat officia accusamus ipsum voluptatem nihil ut veniam modi. Voluptatem sed placeat. Maxime sint quaerat pariatur.
   Culpa ducimus minus quas vero sed aut voluptatem odit et. Placeat odit dicta dolorum est fuga. Modi corporis sint aut quia doloribus tempora ea. Dolor enim eius et.
   Sit nihil eum. Qui sunt iure ducimus iure exercitationem. Sequi doloremque quod maxime est esse nostrum.
   Consequatur blanditiis voluptatibus veritatis totam sit officiis voluptatem nihil. Repudiandae in deleniti voluptate. Quasi aperiam quia at sapiente placeat dolores aut sit rerum. Non praesentium consequatur. Provident voluptatibus ducimus. Eligendi est et id delectus architecto.
   Ipsam minus similique odio quis. Qui ea at sed maiores est est placeat. Ut accusamus dolore illum possimus dolor aut earum magnam. Occaecati aperiam qui sit recusandae id amet ut sapiente quos. Dignissimos incidunt dignissimos error autem qui laboriosam magni voluptatem.
   Maiores accusamus dolor qui illo ratione autem nulla qui.
   Dolor est et debitis est asperiores. Minus cum architecto numquam voluptas. Voluptatem dolorum suscipit id sed eum sed rerum culpa maiores. Rerum ea sit unde quis maiores quo. Deleniti perspiciatis velit provident ut eos recusandae voluptatem autem odit.
   Rerum omnis enim voluptatem id ipsum quisquam omnis sit rerum. Velit qui voluptas ipsum. Molestiae possimus in. Nihil ullam qui laboriosam et mollitia est ullam. Voluptas omnis quis doloremque dolorem voluptas.
   Eaque earum quia ipsa voluptatem quia voluptatum. Voluptatem et rerum nostrum voluptatibus placeat aut. Quia minus sit iusto aut nihil suscipit cumque eos. Quae vel dolore autem. Qui sed consequuntur autem iste deleniti et. Ea assumenda amet quia illum tempora magni et.
   Odio occaecati voluptatem officiis deserunt tempora deleniti qui. Illum sequi hic sit cupiditate fuga eius quod sequi. Quis blanditiis magnam dolorum atque facere.
   Excepturi doloremque quia enim quod et placeat. Enim est magnam. Officiis ut id vel ratione sint saepe nostrum qui sint. Eius voluptas dolores soluta voluptates quae consequatur assumenda pariatur fuga. Ut consequatur dolorum autem fuga corporis cupiditate numquam velit. Ut nam molestias eaque itaque ipsam pariatur iste.
   Omnis voluptatem cumque numquam quaerat dolorem qui. Dolores occaecati ab iusto laboriosam mollitia itaque enim. Illum sint ut. Eum ad perferendis tenetur magnam.
   Accusamus facere minima error officiis. Illo amet iure voluptate nisi aperiam fugit. Sit repellendus reprehenderit aut. Ipsam nesciunt non provident magnam. Id ut veritatis facere.`,
      `Since it's rich text, you can do things like turn a selection of text bold, or add a semantically rendered block quote in the middle of theDolor est et debitis est asperiorespage, like this:`,
    );
    console.timeEnd(fn.name);
    expect(res).toBe(`Dolor est et debitis est asperiores`);
  });
});

test('LCS', () => {
  expect(LCS('bdcaba2342', 'abcbdab42')).toBe('bdab42');
  expect(LCS('ABBCC', 'DBBCC')).toBe('BBCC');
  expect(LCS('ABBCD', 'DBBDE')).toBe('BBD');
});
