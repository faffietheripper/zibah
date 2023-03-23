import React from "react";
import { Link } from "react-router-dom";

export default function FeaturedProducts() {
  return (
    <div>
      <section>
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
            <div className="grid p-6 bg-gray-100 rounded place-content-center sm:p-8 bg-[url('Images/featured.webp')] ">
              <div className="max-w-md mx-auto text-center lg:text-left">
                <header>
                  <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Featured Macrame Products.</h2>

                  <p className="mt-4 text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas rerum quam amet provident nulla error!
                  </p>
                </header>

                <Link
                  to="/shop"
                  className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-teal-700 border border-teal-700 rounded hover:shadow focus:outline-none focus:ring"
                >
                  Shop All
                </Link>
              </div>
            </div>

            <div className="lg:col-span-2 lg:py-8">
              <ul className="grid grid-cols-2 gap-4">
                <li>
                  <a href="#" className="block group">
                    <img
                      src="https://lh3.googleusercontent.com/U9E4BS9MN7krvFd41rdzoH1Muw-dD06G_8LTZCSIOC1ELD7OXD-BCuc8u7XPF6u4Duhq_7UGN2TgRrt6a4PgpUu7M-5555-Rw6SdOVEXlvu-VnOLraqgLeAdAAPM7sZMIpKVKDedD_BWPM2C3uUTGCAkx6U6cIIAJ-71qOUUiPKp2ayXFvA0oEQic6VeoZEhtJBLZGtmi9fAqhs7akqiFnKwaxhHg4J7osvTm_098Sm7D7bLuw2wl5BvQlU0bftUhZl5_xkBGg6LQytv0sJeoJmENAWWbZIwp9LSI59YjDY8aniQwoYMcPaDyCtNAyoMXNz_2FFjZM1qQ8hXmeNqr_k0-DG42QGXG3RZtmOny1gi8l9hOiYQKqfu83yoI_FR2JtcVl-AHsIeoQIx8ksftIokxUWH7MvHrGFEPH1Y-zvCwpOboOa1EH0TtKiu5twz_RET3x4KLLuA79oC8Q48jyU7axwM3C_OIM0HpAoRG8DtuxSW5W-r7zTl4yhzpsyfGsP2BySQ0Z5FIB9n9SPtzuFiJr88sCgte_gSMIwDcOZuvCE-2t0U5R2vOJATdQfDPlzvATdEiGRAHNz8NpgnZmHvsJuR12qHjy2q-1VPIYmH6fF-cyt72WcPpijSH0sMHOKGxcFxnRirDbv3kbCXsF2IgjpOCcotie53WTJ-Y0pELE-p82FeZIwhs9Q-RiR5BcEiEo4gYINRi6F400wLHH96I6PR04OmsF31zgx1LTNUxDZ8vzcboiWdFTA7TBB3nLuAmM3dvig1BcHxUAfLn9oO3qGEHujh0n40K6pH3msrqTtaw8S9_CaD5BPKBFmXhkCASiJUyaw4UHjxTRmHJ6K3I9FOzCvj2iaOBUho_IxYAc4t_pYMf0_boZiCgOrNJmaOKr5Pcw6ksN283BFfEfIvwNp0m8UQnmMZ1vpXHUGZ=w1080-h1374-s-no?authuser=0"
                      alt=""
                      className="object-cover w-full rounded aspect-square"
                    />

                    <div className="mt-3">
                      <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">Macrame Cushion Covers</h3>

                      <p className="mt-1 text-sm text-gray-700">From $15</p>
                    </div>
                  </a>
                </li>

                <li>
                  <a href="#" className="block group">
                    <img
                      src="https://lh3.googleusercontent.com/6LrT0-GH0a1gWPRfs5VD7bxL-0NzS_d8Hdd0aPv9HoucxavVNro_PejNX0rEu8BxwVTCs7kwoE0MQQcXwuyPz63SSc0MawQkowGbrrc6V1kafMlHCspnd-4RmPy2ByQTUhrrYd79tMuMuGOZkyneJupoqZA64LPs1AzyKQVykdPr3nI7EaFIFTC2J0IfvRLzXss031EFLt7E-PD3otCFlhsAN0e3edwfAhE3cIK-LveHIThBfskBYZHPOx2oGreXlOFb2xWjn8QbdSUYGhP2RJvGmuF1CQqgZa-e18yL0r6IHQiMaGqEzXoGectO477lTMbdON69URjvjFLqi82kUeKeS3qhWbPw_oRVXX95G2-q8J-OTvVte4jA0lhkCbR6vZ0KNBLzcRnT2CRsjL5y1WdGXh57aCwWDoKqDLk0SxcuZ7odHKLTbVyyoGz5jhe1j88aDBEZCDyRA2tI-5Ic6TMu3z1Cl635K0GcTnC7fksV1CoMrrQGVvWdu_ysrlmFQnfEr99grl0Fi7dfx65VYJCXGVYq6uhHaDhYO1RSm9o31i35VMP-9N2NiylYl5V5j_sorYRdneKpZl4E49dXfoDz4tuCT2zKWLZa9cdn9GiUSEb-jGGub7mNJqD0LdHNSwr76RgdLO9n3nZdfY6olgxhOysa3pYDCYdZ--hhDeYJlIXLnogM1icLYFUZPGz7jY8BIwPsVtUFte0V1LOKrVJe_m3swQ3BMEjFE46Z9j3V9VkU-K4wtqfjXrI792rZXYu5X8Qq3NLcM8o1ov_GZ9pXFDfdLz550H3Sm1DTevLRqjvrDBmKohlBOZZC0johAjvxImsQiDoN2lYwZfNXz52e5T8in1xXjfVBp3wRQrBKuSpzKl4BEoMl3MWYn84a41_IOxAOnkShu2gFVMRFHOpUkx1c5T9Yhbabnorg5aZ5=w1014-h1578-s-no?authuser=0"
                      alt=""
                      className="object-cover w-full rounded aspect-square"
                    />

                    <div className="mt-3">
                      <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">Plant Pot Hangers</h3>

                      <p className="mt-1 text-sm text-gray-700">From $10</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="block group">
                    <img
                      src="https://lh3.googleusercontent.com/rrgkJXgQpy5ZAjtcld9Nefmr-cnkPTOERGGYWLYLPhL61C_jhXY8RWpylX9doccQmR8hWk7UC0YgYBmT0xUZT7v3zrX-Z7_zrm4PTU4_JZXL64Sz9c7JuUMIkl_SLvk3tDFLwYB1R34uOCjSCyFtnEkGWzMUkpAfR1d179ygwO5JP2TGDCdiCJJ4QFy1e94pFhQ3dMJnzwYApc3t9bD3puaz4963oDBXN4gdO_7zG7HtfTQVMAUMwcc2NHewgJCsbBHXyNVdHKYXQ6CH3Vn2a1VsSjmq97CfaSz5Wt68xfm5eydIHoGPkhbhPt4W75weBtucNQGNomRDovWzl3D8CdLE-lrqXhOvA-5Qb-uuNanTTXfYOdYACGfCPPkJPEPq_Xjk7BI9ftCX9u0g4Lr1z2oqIoe7pEj0y1I8DeALt6jlTpeeG7Fy65NTrGyyE0pw3ExWrD4hBMKthegOwxBKZmB9iCxe9iCWSMk34dROjHuh-4rG110WL81kyAHtwxXC5-W5Q0Q89eXiJXvfnvpzrinPScjXXetCqi41LpGV5dlCW8-99z5jg1zxvv8BaH_oW1jBoejvbowykmyxNuqvqu5NnRXU5GZiL3Ld3UgjkU_cYiqpNUqjl94QE2Nlw9IScSSwUY92gilp10aWUqwfeYUq9sAv_pBkjGRGmFJU8EgVApv_wBA3Qk8kX-JJsTsDj-Y32E6qdhdm1l_PnuzV8zSGkqmou2YLyiFp1Et0GbyZe8VGs3fF6XjDQKyvWUnDwiuqewwOEmzyXgF0H2s4nAssb9D9r5alxXeBRllYFtJo39dy6au53ioG4p8tGPnI8yvYy70etOCSjzKrbPFqcENQ1nM3KtI0AGOdFL-0cXI_8eY020pgVcBNCxNWPp81C5LetiUu2YBKrEI3Q2BCQKmo433lBZjPW7P9OCzGcGRl=w1080-h1371-s-no?authuser=0"
                      alt=""
                      className="object-cover w-full rounded aspect-square"
                    />

                    <div className="mt-3">
                      <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">Macrame Belts</h3>

                      <p className="mt-1 text-sm text-gray-700">From $15</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="block group">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMYJqoXBqHhxgPZXx8ENeyadOjSPPqmoG9TQ&usqp=CAU"
                      alt=""
                      className="object-cover w-full rounded aspect-square"
                    />

                    <div className="mt-3">
                      <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">Macrame Wall Hangers</h3>

                      <p className="mt-1 text-sm text-gray-700">From $30</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
